import { cloneDeep } from 'lodash-es'

// 递归删除meta中 showInMenu 为false的路由
export function filterMenuList(menuList: MenuList) {
  // 处理第一层的菜单数据
  const tempData = cloneDeep(menuList).filter((item: MenuItem) => item.meta?.showInMenu !== false)
  tempData.forEach((item: MenuItem) => {
    if (item.children) item.children = filterMenuList(item.children)
  })
  return tempData
}
