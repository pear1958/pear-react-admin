import { ColorPicker, Divider, Drawer, Switch } from 'antd'
import { useSystemStore } from '@/store'
import './index.less'

const ThemeDrawer = () => {
  const { settingVisible, primary, grayMode, weakMode, setSystemState } = useSystemStore()

  const presets = [
    {
      label: '预设颜色',
      colors: ['#1890ff', '#de152a', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#c71585']
    }
  ]

  return (
    <Drawer
      title="项目设置"
      width={330}
      open={settingVisible}
      onClose={() => setSystemState('settingVisible', false)}
      style={{
        paddingTop: '12px !important'
      }}
      className="setting-drawer"
    >
      <Divider>主题设置</Divider>

      <div className="flex-between mt-4">
        <span>主题颜色</span>
        <ColorPicker
          value={primary}
          presets={presets}
          onChangeComplete={val => setSystemState('primary', val?.toHex() || 'primary')}
        />
      </div>

      <div className="flex-between mt-5">
        <span>灰色模式</span>
        <Switch
          checked={grayMode}
          onChange={value => {
            // to-do
          }}
        />
      </div>

      <div className="flex-between mt-5">
        <span>色弱模式</span>
        <Switch
          checked={weakMode}
          onChange={value => {
            // to-do
          }}
        />
      </div>
    </Drawer>
  )
}

export default ThemeDrawer
