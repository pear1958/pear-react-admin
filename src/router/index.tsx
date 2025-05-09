import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import useMessage from '@/hooks/useMessage'
import { useAuthStore, useUserStore } from '@/store'
import { getFormatRouter } from './utils'
import { staticRouter } from './modules/staticRouter'

const Router: React.FC = () => {
  useMessage()
  const [routeList, setRouteList] = useState<Recordable[]>(staticRouter)
  const [authReqed, setAuthReqed] = useState(false)
  const token = useUserStore(state => state.token)
  const menuList = useAuthStore(state => state.menuList)

  const getMenuList = useAuthStore(state => state.getMenuList)
  const getButtonData = useAuthStore(state => state.getButtonData)
  const flatMenuList = useAuthStore(state => state.flatMenuList)
  const getUserInfo = useUserStore(state => state.getUserInfo)

  const getAuthData = () => {
    return new Promise((resolve, reject) => {
      Promise.all([getMenuList(), getButtonData(), getUserInfo()])
        .then(([res1, res2, res3]) => {
          setAuthReqed(true)
          resolve(!res1 || !res2 || !res3 ? false : true)
        })
        .catch(err => {
          console.log('err', err)
          reject(false)
        })
    })
  }

  if (token && !menuList.length) {
    getAuthData()
  }

  // 会执行两次
  useEffect(() => {
    // 获取到数据以后继续执行以下逻辑
    const dynamicRouter = getFormatRouter(flatMenuList)
    const allRouter = [...staticRouter, ...dynamicRouter]
    allRouter.forEach(item => item.path === '*' && (item.element = <div>404</div>))

    console.log('allRouter', allRouter)

    setRouteList(allRouter)
  }, [authReqed])

  return <RouterProvider router={createBrowserRouter(routeList)} />
}

export default Router
