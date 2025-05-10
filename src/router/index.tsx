import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { cloneDeep } from 'lodash-es'
import useMessage from '@/hooks/useMessage'
import useAuth from '@/hooks/useAuth'
import { useAuthStore, useUserStore } from '@/store'
import { getFormatRouter } from './utils'
import { staticRouter } from './modules/staticRouter'

const Router: React.FC = () => {
  useMessage()
  const [routeList, setRouteList] = useState<Recordable[]>(staticRouter)
  const [authReqed, setAuthReqed] = useState(false)
  const token = useUserStore(state => state.token)
  const menuList = useAuthStore(state => state.menuList)
  const flatMenuList = useAuthStore(state => state.flatMenuList)
  const { initAuth } = useAuth(() => setAuthReqed(true))

  // 刷新页面时, 没有菜单数据
  if (token && !menuList.length) {
    initAuth()
  }

  // 会执行两次
  useEffect(() => {
    // 获取到数据以后继续执行以下逻辑
    const dynamicRouter = getFormatRouter(cloneDeep(flatMenuList))

    const allRouter = [...staticRouter, ...dynamicRouter]

    allRouter.forEach(item => item.path === '*' && (item.element = <div>404</div>))

    console.log('allRouter', allRouter)

    setRouteList(allRouter)
  }, [authReqed])

  return <RouterProvider router={createBrowserRouter(routeList)} />
}

export default Router
