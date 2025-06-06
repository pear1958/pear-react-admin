import { Navigate } from 'react-router-dom'
import { HOME_URL, LOGIN_URL } from '@/config/constant'
import RouterGuard from '../utils/RouterGuard'
import ProgressStart from '@/components/Loading/ProgressStart'
import Login from '@/views/login'

export const list = [
  {
    path: '/',
    element: <Navigate to={HOME_URL} /> // 重定向到首页
  },
  {
    path: LOGIN_URL,
    element: <Login />,
    meta: {
      title: '登录'
    }
  },
  // 动态路由还在请求的时候, 显示Loading
  // 后面会被动态路由替换, 重定向到真正的404
  {
    path: '*',
    element: <ProgressStart />
  }
]

export const staticRouter = list.map(route => {
  return {
    ...route,
    element: <RouterGuard>{route.element}</RouterGuard>,
    loader: () => {
      return { ...route.meta }
    }
  }
})
