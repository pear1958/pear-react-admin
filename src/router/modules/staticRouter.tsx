import { Navigate } from 'react-router-dom'
import { Loading } from '@/components/Loading'
import { HOME_URL, LOGIN_URL } from '@/config/constant'
import RouterGuard from '../utils/RouterGuard'
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
  {
    path: '*',
    element: (
      <div className="h-screen">
        <Loading />
      </div>
    )
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
