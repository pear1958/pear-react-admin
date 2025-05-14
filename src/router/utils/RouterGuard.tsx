import { useEffect } from 'react'
import { useLoaderData, useLocation, useMatches, useNavigate } from 'react-router-dom'
import { HOME_URL, LOGIN_URL, ROUTER_WHITE_LIST } from '@/config/constant'
import { getToken } from '@/utils/auth'

const RouterGuard = ({ children }) => {
  const navigate = useNavigate()
  const matches = useMatches()
  const { pathname } = useLocation()
  const meta = useLoaderData()
  const token = getToken()

  window.$navigate = navigate

  const isLogin = pathname === LOGIN_URL

  console.log('1111111')

  // bug: 有token 访问登录页 登录页会闪动一下
  useEffect(() => {
    console.log('2222222')

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
  }, [matches])

  return children
}

export default RouterGuard
