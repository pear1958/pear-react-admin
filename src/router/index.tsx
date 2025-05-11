import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { cloneDeep } from 'lodash-es'
import useMessage from '@/hooks/useMessage'
import useAuth from '@/hooks/useAuth'
import { useAuthStore } from '@/store'
import { getFormatRouter } from './utils'
import { staticRouter } from './modules/staticRouter'
import { getToken } from '@/utils/auth'

const Router: React.FC = () => {
  useMessage()
  const [routeList, setRouteList] = useState<Recordable[]>(staticRouter)
  const { initAuth } = useAuth()

  const { menuList, flatMenuList } = useAuthStore(state => ({
    menuList: state.menuList,
    flatMenuList: state.flatMenuList
  }))

  const token = getToken()

  // console.log('路由挂载重渲染')

  // 会执行两次
  useEffect(() => {
    // console.log('路由挂载effect', token)

    if (!token) return

    // 刷新页面时, 没有菜单数据
    // 加载期间会走到 path: '*' -> <Loading />
    if (token && !menuList.length) {
      initAuth()
      return
    }

    // 获取到数据以后继续执行以下逻辑
    const dynamicRouter = getFormatRouter(cloneDeep(flatMenuList))

    const allRouter = [...staticRouter, ...dynamicRouter]

    allRouter.forEach(item => item.path === '*' && (item.element = <div>404</div>))

    // console.log('allRouter', allRouter)

    setRouteList(allRouter)
  }, [menuList])

  return <RouterProvider router={createBrowserRouter(routeList)} />
}

export default Router
