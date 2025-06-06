import { useAuthStore } from '@/store'
import dayjs from 'dayjs'

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

export function getUrlWithParams() {
  const url = {
    hash: location.hash.substring(1),
    history: location.pathname + location.search
  }
  return url[mode]
}

export const getMenuByPath = (
  menulist: Recordable[] = useAuthStore.getState().flatMenuList,
  path: string = getUrlWithParams()
) => {
  const menuItem = menulist.find(menu => {
    const regex = new RegExp(`^${menu.path?.replace(/:.[^/]*/, '.*')}$`)
    return regex.test(path)
  })
  return menuItem || {}
}
