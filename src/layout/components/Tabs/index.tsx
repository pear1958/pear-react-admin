import { useLocation, useMatches, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Tabs as AntdTabs } from 'antd'
import { useUpdateEffect } from 'ahooks'
import { useAuthStore, useTabsStore } from '@/store'
import './index.less'
import useDragTab from './useDragTab'
import MoreButton from './MoreButton'

type TargetKey = string | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>

const Tabs: React.FC = () => {
  // 自动重渲染
  const matches = useMatches()
  const location = useLocation()
  const navigate = useNavigate()

  const path = location.pathname + location.search
  const meta = matches[matches.length - 1].data || {}
  const { redirect, title = '' } = meta as Recordable

  const flatMenuList = useAuthStore(state => state.flatMenuList)
  const { tabsList, addTab, removeTab } = useTabsStore(state => ({
    tabsList: state.tabsList,
    addTab: state.addTab,
    removeTab: state.removeTab
  }))

  useEffect(() => initTabs(), [])

  const initTabs = () => {
    flatMenuList.forEach(item => {
      // 添加需要固定的Tab
      if (item.meta?.isAffix && !item.meta.showInMenu && !item.meta.isFull) {
        addTab({
          title: item.meta?.title || '',
          path: item.path,
          closable: true
        })
      }
    })

    addTab({
      title,
      path,
      closable: true
    })
  }

  // 监听路由改变 忽略首次执行，只在依赖更新时执行
  useUpdateEffect(() => {
    if (redirect) return
    addTab({
      title,
      path,
      closable: true
    })
  }, [matches])

  const items = tabsList.map(item => ({
    key: item.path,
    label: <span>{item.title}</span>,
    closable: item.closable
  }))

  const { renderTabBar } = useDragTab(items)

  const onChange = (path: string) => {
    navigate(path)
  }

  // 新增或编辑
  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'remove') {
      const isCurrent = targetKey == path
      removeTab(targetKey as string, isCurrent)
    }
  }

  return (
    <div className="pear-tabs">
      <AntdTabs
        type="editable-card"
        activeKey={path}
        items={items}
        onEdit={onEdit}
        onChange={onChange}
        renderTabBar={renderTabBar}
        tabBarExtraContent={<MoreButton path={path} />}
      />
    </div>
  )
}

export default Tabs
