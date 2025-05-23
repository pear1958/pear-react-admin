import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { cloneDeep } from 'lodash-es'
import Suspense from '@/components/Suspense'
import Layout from '@/layout'
import RouterGuard from './RouterGuard'

const modules = import.meta.glob(['@/views/**/*.tsx', '!@/views/login/**/*.tsx']) as Recordable<
  Parameters<typeof lazy>[number]
>

const formatRouter = (flatMenuList: MenuList) => {
  const dynamicRouter: Recordable[] = [{ element: <Layout />, children: [] }]

  const newMenuList = flatMenuList.map(flatItem => {
    const item = cloneDeep(flatItem)
    item.children && delete item.children

    // eg: 简写路由重定向到第一个子路由
    if (item.redirect) item.element = <Navigate to={item.redirect} />

    if (item.element && typeof item.element == 'string') {
      const Component = Suspense(lazy(modules['/src/views' + item.element + '.tsx']))
      item.element = <RouterGuard>{Component}</RouterGuard>
    }

    item.loader = () => item.meta

    return item
  })

  newMenuList.forEach(item => {
    if (item.meta?.isFull) {
      dynamicRouter.push(item)
    } else {
      dynamicRouter[0].children.push(item)
    }
  })

  return dynamicRouter
}

export default formatRouter
