import Cookies from 'js-cookie'
import { PEAR_REMEMBER, PEAR_LOGIN_INFO, TOKEN_KEY } from '@/config/constant'

export const getToken = () => {
  return Cookies.get(TOKEN_KEY)
}

export const setToken = (token: string) => {
  return Cookies.set(TOKEN_KEY, `${token}`)
}

export const removeToken = () => {
  return Cookies.remove(TOKEN_KEY)
}

export const getRemember = () => {
  const val = localStorage.getItem(PEAR_REMEMBER)
  return JSON.parse(val)
}

export const setRemember = <T = any>(value: T) => {
  const val = JSON.stringify(value)
  return localStorage.setItem(PEAR_REMEMBER, val)
}

export const removeRemember = () => {
  return localStorage.removeItem(PEAR_REMEMBER)
}

export const getLoginInfo = () => {
  const val = localStorage.getItem(PEAR_LOGIN_INFO)
  return JSON.parse(val)
}

export const setLoginInfo = <T = any>(value: T) => {
  const val = JSON.stringify(value)
  return localStorage.setItem(PEAR_LOGIN_INFO, val)
}

export const removeLoginInfo = () => {
  return localStorage.removeItem(PEAR_LOGIN_INFO)
}
