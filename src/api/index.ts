import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { genUUID, isObject } from 'pear-common-utils'
import { message } from '@/hooks/useMessage'
import { httpResEnum } from '@/enums/httpEnum'
import { checkStatus } from './utils/checkStatus'
import { Config, CustomAxiosRequestConfig } from './types'
import { showFullScreenLoading, hideFullScreenLoading } from '@/components/Loading/fullScreen'
import { LOGIN_URL } from '@/config/constant'
import { getToken, removeToken, setToken } from '@/utils/auth'

const config = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: httpResEnum.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'trace-id': genUUID()
  }
}

class Http {
  service: AxiosInstance

  // 实例化axios
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    // 请求拦截器
    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        const token = getToken()

        // showLoading: 默认为false, 即不显示全局Loading
        config.showLoading && showFullScreenLoading()

        if (token) config.headers.Authorization = `Bearer ${token}`

        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response

        hideFullScreenLoading()

        // token过期, 后端如果重新返回, 则储存在本地
        const { authorization: authStr } = response.headers

        if (authStr && authStr.length > 0) {
          const token = authStr.substr(7)
          setToken(token)
        }

        // token过期
        if (isObject(data) && data?.code == httpResEnum.OVERDUE) {
          message.error(data.message)
          removeToken()
          window.$navigate(LOGIN_URL)
          return Promise.reject(data)
        }

        // 全局错误信息拦截
        if (isObject(data) && !String(data.code).startsWith('2')) {
          message.error(data.message)
          return Promise.reject(data)
        }

        if (config.headers.fullResponse === 'true') return response

        return data
      },
      (error: AxiosError) => {
        hideFullScreenLoading()

        // 请求超时 && 网络错误单独判断，没有 response
        if (error.message.indexOf('timeout') !== -1) message.error('请求超时！请您稍后重试')
        if (error.message.indexOf('Network Error') !== -1) message.error('网络错误！请您稍后重试')

        // 接口请求失败, 同时接口返回了响应数据
        const { message: msg } = (error.response?.data || {}) as Recordable
        if (msg) message.error(msg)

        // 根据响应的错误状态码, 做不同的处理
        if (!msg && error.response) checkStatus(error.response.status)

        return Promise.reject(error)
      }
    )
  }

  get<T = any>(url: string, params?: object, config: Config = {}): Promise<T> {
    return this.service.get(url, { params, ...config })
  }

  post<T = any>(url: string, data?: object, config: Config = {}): Promise<T> {
    return this.service.post(url, data, config)
  }

  put<T = any>(url: string, params?: object, config: Config = {}): Promise<T> {
    return this.service.put(url, params, config)
  }

  delete<T = any>(url: string, params?: any, config: Config = {}): Promise<T> {
    return this.service.delete(url, { params, ...config })
  }

  download(url: string, params?: object, config: Config = {}): Promise<BlobPart> {
    return this.service.post(url, params, { ...config, responseType: 'blob' })
  }
}

const http = new Http(config)

export default http
