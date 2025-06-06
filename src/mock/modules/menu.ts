import { menuList } from '@/views/systemManage/menu/mockData'

export const getMockMenuData = (params: Recordable) => {
  const { current, pageSize } = params
  const startIndex = (current - 1) / pageSize
  return menuList.slice(startIndex, current * pageSize)
}
