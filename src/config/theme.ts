const prefix = 'pear'

const config = {
  light: {
    'header-bg': '#ffffff',
    'main-bg': '#f0f2f5',
    'tabs-bg': '#ffffff',
    'menu-bg': '#001529',
    'sub-menu-bg': '#0c2135',
    'main-color': '#303133',
    'page-bg': '#ffffff',
    'menu-scrollbar-thumb-bg': '#909399b3', // 0.3
    'menu-scrollbar-thumb-hover-bg': '#909399',
    'table-border-color': '#f0f0f0'
  },
  dark: {
    'header-bg': '#141414',
    'main-bg': '#141414',
    'tabs-bg': '#141414',
    'menu-bg': '#1f1f1f',
    'sub-menu-bg': '#2d2d2d',
    'main-color': '#ffffffd9',
    'page-bg': '#1f1f1f',
    'menu-scrollbar-thumb-bg': '#505153',
    'menu-scrollbar-thumb-hover-bg': '#68696D',
    'table-border-color': '#303030'
  }
}

const commonTheme = {}

for (const [themeKey, themeObj] of Object.entries(config)) {
  const temp = {}
  for (const [key, value] of Object.entries(themeObj)) {
    temp[`--${prefix}-${key}`] = value
  }
  commonTheme[themeKey] = temp
}

export default commonTheme
