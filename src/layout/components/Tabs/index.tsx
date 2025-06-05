import { useLocation, useMatches, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Tabs as AntdTabs } from 'antd'
import { useAuthStore, useTabsStore } from '@/store'
import useDragTab from './useDragTab'
import MoreButton from './MoreButton'
import './index.less'
import { ERROR_404_NAME, ERROR_404_URL } from '@/config/constant'

const Tabs: React.FC = () => {
  // 自动重渲染
  const matches = useMatches()
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  const flatMenuList = useAuthStore(state => state.flatMenuList)
  const { tabsList, addTab, removeTab, addKeepAlive, removeKeepAlive } = useTabsStore()

  const path = pathname + search

  const meta = matches[matches.length - 1].data || {}
  const { redirect, title = '', keepAlive, name } = meta as Recordable

  useEffect(() => initAffixTabs(), [])

  const initAffixTabs = () => {
    flatMenuList.forEach(item => {
      // 添加需要固定的Tab
      if (item.meta?.affix && !item.meta.fullscreen) {
        addTab({
          title: item.meta?.title || '',
          path: item.path,
          closable: true
        })
      }
    })
  }

  useEffect(() => {
    if (name !== ERROR_404_NAME) {
      removeTab(ERROR_404_URL, false)
    }

    if (redirect) return

    addTab({
      title,
      path,
      closable: true
    })

    if (keepAlive !== false) addKeepAlive(path)
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
  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'remove') {
      const isCurrent = targetKey == path
      removeTab(targetKey, isCurrent)
      removeKeepAlive(targetKey)
    }
  }

  return (
    <div className="pear-tabs">
      <AntdTabs
        type="editable-card"
        hideAdd
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
