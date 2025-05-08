import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getBrowserLang } from 'pear-common-utils'
import en from './modules/en'
import zh from './modules/zh'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    zh: {
      translation: zh
    }
  },
  lng: getBrowserLang(),
  debug: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
