import { useAuthStore } from '@/store'
import dayjs from 'dayjs'
import { Response } from '@/api/types'
import { REQUEST_CODE } from '@/enums/httpEnum'

export const isDev = import.meta.env.MODE === 'development'

export const mode = import.meta.env.VITE_ROUTER_MODE

/**
 * @param {*} format https://day.js.org/docs/zh-CN/parse/string-format
 */
export const formatDate = (date: string | undefined, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date) return '--'
  return dayjs(date).format(format)
}

export const setProperty = (key: string, val: string) => {
  document.documentElement.style.setProperty(key, val)
}

export function getPath() {
  const url = {
    hash: location.hash.substring(1),
    history: location.pathname + location.search
  }
  return url[mode]
}

export const getMenuItemByPath = (
  menulist: Recordable[] = useAuthStore.getState().flatMenuList,
  path: string = getPath()
) => {
  const menuItem = menulist.find(menu => {
    // eg: /users/:id/posts -> :id被替换成任意字符
    const str = menu.path.replace(/:.[^/]*/, '.*')
    const regex = new RegExp(`^${str}$`)
    // 菜单path === 路由path
    return regex.test(path)
  })
  return menuItem || {}
}

export const formatResponse = (response: Response) => {
  const { code, data } = response
  return {
    data: data.items || [],
    total: data.meta?.totalItems || 0,
    success: code === REQUEST_CODE.SUCCESS
  }
}
