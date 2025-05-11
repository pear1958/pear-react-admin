import { Navigate } from 'react-router-dom'
import { Loading } from '@/components/Loading'
import { HOME_URL, LOGIN_URL } from '@/config/constant'
import Login from '@/views/login'
import RouterGuard from '../utils/RouterGuard'

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
  // Set <Loading /> here first to prevent page refresh 404
  {
    path: '*',
    element: (
      <div style={{ height: '100vh' }}>
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
