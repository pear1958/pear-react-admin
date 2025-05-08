import { ConfigProvider, theme } from 'antd'
import LayoutClassic from './layout'
import { useSystemStore } from './store'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'

const App = () => {
  const {
    isDark,
    primary,
    componentSize,
    compactAlgorithm,
    borderRadius,
    language,
    setSystemState
  } = useSystemStore(state => ({
    isDark: state.isDark,
    primary: state.primary,
    componentSize: state.componentSize,
    compactAlgorithm: state.compactAlgorithm,
    borderRadius: state.borderRadius,
    language: state.language,
    setSystemState: state.setSystemState
  }))

  const getAlgorithm = () => {
    const algorithm = isDark ? [theme.darkAlgorithm] : [theme.defaultAlgorithm]
    if (compactAlgorithm) algorithm.push(theme.compactAlgorithm)
    return algorithm
  }

  return (
    <ConfigProvider
      locale={language === 'zh' ? zhCN : enUS}
      componentSize={componentSize}
      theme={{
        token: { colorPrimary: primary, borderRadius },
        algorithm: getAlgorithm()
      }}
    >
      <LayoutClassic />
    </ConfigProvider>
  )
}

export default App
