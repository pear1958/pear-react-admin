import { memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Dropdown, MenuProps } from 'antd'
import {
  CloseOutlined,
  ColumnWidthOutlined,
  FullscreenOutlined,
  MinusOutlined,
  ReloadOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined
} from '@ant-design/icons'
import SvgIcon from '@/components/SvgIcon'
import { RefreshContext } from '@/context/refresh'
import { useSystemStore, useTabsStore } from '@/store'

const MoreButton = ({ path }) => {
  const { t } = useTranslation()
  const { updateMainShow } = useContext(RefreshContext)
  const setSystemState = useSystemStore(state => state.setSystemState)
  const { removeTab, removeTabsSide, closeMultipleTab, removeKeepAlive } = useTabsStore()

  const items: MenuProps['items'] = [
    {
      key: 'refresh',
      label: <span>{t('tabs.refresh')}</span>,
      icon: <ReloadOutlined />,
      onClick: () => {
        updateMainShow(false)
        setTimeout(() => updateMainShow(true))
      }
    },
    {
      key: 'mainMaximize',
      label: <span>{t('tabs.maximize')}</span>,
      icon: <FullscreenOutlined />,
      onClick: () => setSystemState('mainMaximize', true)
    },
    {
      type: 'divider'
    },
    {
      key: 'closeCurrentTab',
      label: <span>{t('tabs.closeCurrent')}</span>,
      icon: <CloseOutlined />,
      onClick: () => {
        removeTab(path, true)
        removeKeepAlive(path)
      }
    },
    {
      key: 'closeLeftTab',
      label: <span>{t('tabs.closeLeft')}</span>,
      icon: <VerticalRightOutlined />,
      onClick: () => {
        removeTabsSide(path, 'left')
        removeKeepAlive(path, 'left')
      }
    },
    {
      key: 'closeRightTab',
      label: <span>{t('tabs.closeRight')}</span>,
      icon: <VerticalLeftOutlined />,
      onClick: () => {
        removeTabsSide(path, 'right')
        removeKeepAlive(path, 'right')
      }
    },
    {
      type: 'divider'
    },
    {
      key: 'closeOtherTab',
      label: <span>{t('tabs.closeOther')}</span>,
      icon: <ColumnWidthOutlined />,
      onClick: () => {
        closeMultipleTab(path)
        removeKeepAlive(path, 'other')
      }
    },
    {
      key: 'closeAllTab',
      label: <span>{t('tabs.closeAll')}</span>,
      icon: <MinusOutlined />,
      onClick: () => {
        closeMultipleTab()
        removeKeepAlive(path, 'all')
      }
    }
  ]

  return (
    <Dropdown menu={{ items }}>
      <div className="more-button">
        <SvgIcon name="arrow-down" size={21} />
      </div>
    </Dropdown>
  )
}

export default memo(MoreButton)
