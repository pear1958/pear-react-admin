import { FC, useEffect, useState } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import useTheme from '@/hooks/useTheme'
import useMessage from '@/hooks/useMessage'
import useAuth from '@/hooks/useAuth'
import { useAuthStore } from '@/store'
import { getFormatRouter } from './utils'
import { staticRouter } from './modules/staticRouter'
import { getToken } from '@/utils/auth'
import { ERROR_404_URL } from '@/config/constant'

const Router: FC = () => {
  useTheme()
  useMessage()
  const [routeList, setRouteList] = useState<Recordable[]>(staticRouter)
  const { initAuth } = useAuth()

  const { menuList, flatMenuList } = useAuthStore(state => ({
    menuList: state.menuList,
    flatMenuList: state.flatMenuList
  }))

  const token = getToken()

  // 会执行两次
  useEffect(() => {
    if (!token) return

    // 刷新页面时, 没有菜单数据
    // 加载期间会走到 path: '*' -> <Loading />
    if (token && !menuList.length) {
      initAuth()
      return
    }

    // 获取到数据以后继续执行以下逻辑
    const dynamicRouter = getFormatRouter(flatMenuList)

    const allRouter = [...staticRouter, ...dynamicRouter]

    allRouter.forEach(item => {
      if (item.path === '*') item.element = <Navigate to={ERROR_404_URL} />
    })

    setRouteList(allRouter)
  }, [menuList])

  return <RouterProvider router={createBrowserRouter(routeList)} />
}

export default Router
