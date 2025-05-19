import { useSystemStore } from '@/store'
import { theme } from 'antd'
import { useEffect } from 'react'

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
  }
}

export default useTheme
