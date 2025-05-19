import { useEffect } from 'react'
import { theme } from 'antd'
import { useSystemStore } from '@/store'
import commonTheme from '@/config/theme'

const useTheme = () => {
  const { token } = theme.useToken()

  const { isDark, primary, grayMode, weakMode, compactAlgorithm } = useSystemStore(state => ({
    isDark: state.isDark,
    primary: state.primary,
    grayMode: state.grayMode,
    weakMode: state.weakMode,
    compactAlgorithm: state.compactAlgorithm
  }))

  useEffect(() => changeDark(isDark), [isDark])

  // useEffect(() => changePrimary(), [primary, compactAlgorithm])

  const changeDark = (dark: boolean) => {
    const html = document.documentElement as HTMLElement
    html.classList[dark ? 'add' : 'remove']('dark')
    // 设置全局颜色
    const type = dark ? 'dark' : 'light'
    const theme = commonTheme[type]
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value as string)
    }
  }
}

export default useTheme
