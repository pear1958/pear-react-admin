import { useEffect } from 'react'
import { useLoaderData, useLocation, useMatches, useNavigate } from 'react-router-dom'
import { HOME_URL, LOGIN_URL, ROUTER_WHITE_LIST } from '@/config/constant'
import { getToken } from '@/utils/auth'
import { useAuthStore } from '@/store'

// 验证以下行为即可
// 没有 token -> 访问 Login 页
// 没有 token -> 访问 home 页 (重定向到 Login) Bug
// 有 token -> 访问 Login 页 (重定向到 Home)
// 有 token -> 访问 home 页

const RouterGuard = ({ children }) => {
  const navigate = useNavigate()
  const matches = useMatches()
  const { pathname } = useLocation()
  const meta = useLoaderData()
  const token = getToken()
  const setRouteName = useAuthStore(state => state.setRouteName)

  const match = matches[matches.length - 1] as Recordable
  setRouteName(match.data?.name)

  window.$navigate = navigate

  const isLogin = pathname === LOGIN_URL

  // useNavigate() 返回的 navigate 函数 必须在组件挂载以后调用
  // You should call navigate() in a React.useEffect(), not when your component is first rendered.
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
    if (!isLogin && !token) {
      navigate(LOGIN_URL, { replace: true })
      return
    }
  }, [matches])

  // 修复bug: 有token 访问登录页 登录页会闪动一下
  if (isLogin && token) {
    return <></>
  }

  return children
}

export default RouterGuard
