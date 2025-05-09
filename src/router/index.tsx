import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import useMessage from '@/hooks/useMessage'
import { useAuthStore, useUserStore } from '@/store'

const getAuthData = (callback?: Function) => {
  const getMenuList = useAuthStore(state => state.getMenuList)
  const getButtonData = useAuthStore(state => state.getButtonData)
  const getUserInfo = useUserStore(state => state.getUserInfo)

  return new Promise((resolve, reject) => {
    Promise.all([getMenuList(), getButtonData(), getUserInfo()])
      .then(([res1, res2, res3]) => {
        callback && callback()
        resolve(!res1 || !res2 || !res3 ? false : true)
      })
      .catch(() => {
        reject(false)
      })
  })
}

const Router: React.FC = () => {
  useMessage()
  const [authReqed, setAuthReqed] = useState(false)
  const [routes, setRoutes] = useState([])
  const token = useUserStore(state => state.token)
  const menuList = useAuthStore(state => state.menuList)

  // 会执行两次
  useEffect(() => {
    if (token && !menuList?.length) {
      getAuthData(() => setAuthReqed(true))
      return
    }
    // 获取到数据以后继续执行以下逻辑
    const flatMenuList = useAuthStore(state => state.flatMenuList)
  }, [authReqed])

  return <RouterProvider />
}

export default Router
