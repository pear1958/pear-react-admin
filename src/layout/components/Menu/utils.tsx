import { Icon } from '@iconify-icon/react'

export const formatMenuList = (menuList: MenuList) =>
  menuList.map(item => {
    const temp = {
      label: item.meta?.title,
      icon: item.meta?.icon ? <Icon icon={item.meta.icon} /> : null,
      key: item.path,
      type: item.type
    }
    const menuItem = !item?.children?.length
      ? temp
      : {
          ...temp,
          children: formatMenuList(item.children)
        }
    return menuItem
  })

/**
 * @description 获取需要展开的子菜单keys
 */
export function getOpenKeys(path: string): string[] {
  const openKeys = []
  let currentKey = ''
  // eg: /menu/menu2/menu22/menu221 -> ['/', '/menu', '/menu2', '/menu22', '/menu221']
  const pathSegs = path.split('/').map(seg => '/' + seg)

  // 不遍历第一级(/)和最后一级
  for (let i = 1; i < pathSegs.length - 1; i++) {
    currentKey += pathSegs[i] // 依次为: /menu -> /menu/menu2 -> /menu/menu2/menu22
    openKeys.push(currentKey) // ['/menu', '/menu/menu2', '/menu/menu2/menu22']
  }

  return openKeys
}
