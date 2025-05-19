import { Watermark } from 'antd'
import { useSystemStore, useUserStore } from '@/store'
import LayoutClassic from './LayoutClassic'
import SettingDrawer from './components/SettingDrawer'

const Layout: React.FC = () => {
  const watermark = useSystemStore(state => state.watermark)
  const { userInfo } = useUserStore()

  return (
    <Watermark
      zIndex={1001}
      content={watermark ? [userInfo.name || '', userInfo.mobile || ''] : ['Pear-Admin']}
    >
      <LayoutClassic />
      <SettingDrawer />
    </Watermark>
  )
}

export default Layout
