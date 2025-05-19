import { memo } from 'react'
import { Switch } from 'antd'
import { useSystemStore } from '@/store'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'

const DarkIcon = () => {
  const { isDark, setSystemState } = useSystemStore(state => ({
    isDark: state.isDark,
    setSystemState: state.setSystemState
  }))

  return (
    <Switch
      checked={isDark}
      checkedChildren={<SunOutlined />}
      unCheckedChildren={<MoonOutlined />}
      onChange={value => setSystemState('isDark', value)}
    />
  )
}

export default memo(DarkIcon)
