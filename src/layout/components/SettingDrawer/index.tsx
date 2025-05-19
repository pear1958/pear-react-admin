import { Drawer } from 'antd'
import { useSystemStore } from '@/store'

const ThemeDrawer = () => {
  const { settingVisible, setSystemState } = useSystemStore()
  return (
    <Drawer
      title="项目设置"
      width={330}
      open={settingVisible}
      onClose={() => setSystemState('settingVisible', false)}
    >
      111
    </Drawer>
  )
}

export default ThemeDrawer
