import { memo } from 'react'
import { SettingOutlined } from '@ant-design/icons'
import { useSystemStore } from '@/store'

const Setting = () => {
  const setSystemState = useSystemStore(state => state.setSystemState)

  const openDrawer = () => {
    setSystemState('settingVisible', true)
  }

  return <SettingOutlined onClick={openDrawer} className="primary" />
}

export default memo(Setting)
