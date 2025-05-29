import { useEffect } from 'react'
import { ConfigProvider, theme, App as AppProvider } from 'antd'
import { I18nextProvider } from 'react-i18next'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { getBrowserLang } from 'pear-common-utils'
import { useSystemStore } from './store'
import i18n from './languages'
import { RefreshProvider } from './context/refresh'
import Router from './router'
import useCheckVersion from './hooks/useCheckVersion'
import { ModalProvider } from './context/modal'

const App = () => {
  const { isDark, primary, componentSize, compactAlgorithm, language, setSystemState } =
    useSystemStore(state => ({
      isDark: state.isDark,
      primary: state.primary,
      componentSize: state.componentSize,
      compactAlgorithm: state.compactAlgorithm,
      language: state.language,
      setSystemState: state.setSystemState
    }))

  const getAlgorithm = () => {
    const algorithm = isDark ? [theme.darkAlgorithm] : [theme.defaultAlgorithm]
    if (compactAlgorithm) algorithm.push(theme.compactAlgorithm)
    return algorithm
  }

  useEffect(() => {
    const lang = language ?? getBrowserLang()
    setSystemState('language', lang)
    i18n.changeLanguage(language)
    dayjs.locale(language === 'zh' ? 'zh-cn' : 'en')
  }, [language])

  useCheckVersion()

  return (
    <ConfigProvider
      locale={language === 'zh' ? zhCN : enUS}
      componentSize={componentSize}
      theme={{
        token: { colorPrimary: primary },
        algorithm: getAlgorithm()
      }}
    >
      <AppProvider>
        <ModalProvider>
          <I18nextProvider i18n={i18n}>
            <RefreshProvider>
              <Router />
            </RefreshProvider>
          </I18nextProvider>
        </ModalProvider>
      </AppProvider>
    </ConfigProvider>
  )
}

export default App
