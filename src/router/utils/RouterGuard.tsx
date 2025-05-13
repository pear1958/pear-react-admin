import { useEffect } from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { HOME_URL, LOGIN_URL, ROUTER_WHITE_LIST } from '@/config/constant'
import { getToken } from '@/utils/auth'

const RouterGuard = ({ children }) => {
  const navigate = useNavigate()
  const meta = useLoaderData()
  const { pathname } = useLocation()
  const token = getToken()

  window.$navigate = navigate

  const isLogin = pathname === LOGIN_URL

  useEffect(() => {
    if (meta) {
      const title = import.meta.env.VITE_TITLE
      document.title = meta.title ? `${meta.title} - ${title}` : title
    }

    if (ROUTER_WHITE_LIST.includes(pathname)) return

    // token存在, 不能访问登录页
    if (isLogin && token) {
      navigate(HOME_URL)
      return
    }

    // 没有token进入系统, 强制退出
    if (!token && !isLogin) {
      navigate(LOGIN_URL, { replace: true })
      return
    }
  }, [])

  return children
}

export default RouterGuard
