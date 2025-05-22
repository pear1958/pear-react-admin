import { useEffect, useMemo, useState } from 'react'
import { useLocation, useMatches, useNavigate } from 'react-router-dom'
import { Menu as AntdMenu, ConfigProvider } from 'antd'
import { useAuthStore, useSystemStore } from '@/store'
import { formatMenuList, getOpenKeys } from './utils'
import './index.less'
import Scrollbar from '@/components/Scrollbar'

const Menu = () => {
  const matches = useMatches()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { isCollapse, accordion, width } = useSystemStore(state => ({
    isCollapse: state.sideBar.isCollapse,
    width: state.sideBar.width,
    accordion: state.accordion
  }))

  const { showMenuList, flatMenuList } = useAuthStore(state => {
    return {
      showMenuList: state.showMenuList,
      flatMenuList: state.flatMenuList
    }
  })

  // 当前展开的 SubMenu 菜单项 key 数组
  const [openKeys, setOpenKeys] = useState<string[]>([])

  // 当前选中的菜单项 key 数组
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const antdMenuList = useMemo(() => formatMenuList(showMenuList), [showMenuList])

  const handleMenuClick = ({ key }) => {
    const menuItem = flatMenuList.find(item => item.path === key)
    if (menuItem?.meta?.link) window.open(menuItem.meta.link, '_blank')
    navigate(key)
  }

  const onOpenChange = (openKeys: string[]) => {
    // 切换相同 菜单 & 一个菜单 (带有折叠标题的菜单)
    if (openKeys.length <= 1) return setOpenKeys(openKeys)

    // 切换多级菜单 (>=2)
    const lastOpenKey = openKeys[openKeys.length - 1]
    if (lastOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)

    // 如果切换的不是嵌套子菜单, 则永远设置点击的最后一个菜单
    setOpenKeys([lastOpenKey])
  }

  useEffect(() => {
    const meta = matches[matches.length - 1].data as Recordable

    // activeMenuPath: 详情页选中的菜单, 在路由表中配置
    const path = meta?.activeMenuPath ?? pathname

    setSelectedKeys([path])

    // 使用setTimeout来防止菜单展开时出现样式异常
    if (accordion) {
      const keys = getOpenKeys(pathname)
      setTimeout(() => setOpenKeys(keys))
    }
  }, [matches])

  return (
    <div className="pear-menu" style={{ width: width + 'px' }}>
      <Scrollbar>
        <ConfigProvider
          theme={{
            components: {
              Menu: { collapsedWidth: width }
            }
          }}
        >
          <AntdMenu
            mode="inline"
            theme="dark"
            items={antdMenuList}
            selectedKeys={selectedKeys}
            onClick={handleMenuClick}
            inlineCollapsed={isCollapse}
            {...(accordion && { openKeys, onOpenChange })}
          />
        </ConfigProvider>
      </Scrollbar>
    </div>
  )
}

export default Menu
