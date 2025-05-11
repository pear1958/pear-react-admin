import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { cloneDeep } from 'lodash-es'
import Lazy from '@/components/Lazy'
import Layout from '@/layout'
import RouterGuard from './RouterGuard'

const modules = import.meta.glob('@/views/**/*.tsx') as Recordable<Parameters<typeof lazy>[number]>

// 递归删除meta中 showInMenu 为false的路由
export function filterMenuList(menuList: MenuList) {
  // 处理第一层的菜单数据
  const tempData = cloneDeep(menuList).filter((item: MenuItem) => item.meta?.showInMenu !== false)
  tempData.forEach((item: MenuItem) => {
    if (item.children) item.children = filterMenuList(item.children)
  })
  return tempData
}

export const getFormatRouter = (flatMenuList: MenuList) => {
  const dynamicRouter: Recordable[] = [{ element: <Layout />, children: [] }]

  const newMenuList = flatMenuList.map(item => {
    item.children && delete item.children

    // eg: 简写路由重定向到第一个子路由
    if (item.redirect) item.element = <Navigate to={item.redirect} />

    if (item.element && typeof item.element == 'string') {
      const Component = Lazy(lazy(modules['/src/views' + item.element + '.tsx']))
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
