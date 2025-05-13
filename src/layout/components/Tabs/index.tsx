import { useLocation, useMatches, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Tabs as AntdTabs } from 'antd'
import { useUpdateEffect } from 'ahooks'
import { useAuthStore, useTabsStore } from '@/store'
import './index.less'
import useDragTab from './useDragTab'

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
  const { tabsList, addTab } = useTabsStore(state => ({
    tabsList: state.tabsList,
    addTab: state.addTab
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

  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'remove') {
      // removeTab(targetKey, targetKey == path)
    }
  }

  return (
    <div className="pear-tabs">
      <AntdTabs
        type="editable-card"
        activeKey={path}
        items={items}
        onChange={onChange}
        renderTabBar={renderTabBar}
      />
    </div>
  )
}

export default Tabs
