import { useEffect } from 'react'
import { theme } from 'antd'
import { getDarkColor, getLightColor } from 'pear-common-utils'
import { useSystemStore } from '@/store'
import commonTheme from '@/config/theme'
import { setProperty } from '@/utils'

const useTheme = () => {
  const { token } = theme.useToken()

  const { isDark, primary, grayMode, weakMode, compactAlgorithm, setSystemState } = useSystemStore(
    state => ({
      isDark: state.isDark,
      primary: state.primary,
      grayMode: state.grayMode,
      weakMode: state.weakMode,
      compactAlgorithm: state.compactAlgorithm,
      setSystemState: state.setSystemState
    })
  )

  useEffect(() => changePrimary(), [primary])

  useEffect(() => changeDark(isDark), [isDark])

  const changePrimary = () => {
    setProperty('--pear-primary-color', primary)

    for (let i = 1; i <= 9; i++) {
      setProperty(
        `--pear-primary-color-${i}`,
        isDark ? `${getDarkColor(primary, i / 10)}` : `${getLightColor(primary, i / 10)}`
      )
    }
  }

  const changeDark = (dark: boolean) => {
    const html = document.documentElement as HTMLElement
    html.classList[dark ? 'add' : 'remove']('dark')
    // 设置全局颜色
    const type = dark ? 'dark' : 'light'
    const theme = commonTheme[type]
    for (const [key, value] of Object.entries(theme)) {
      setProperty(key, value as string)
    }
  }
}

export default useTheme
