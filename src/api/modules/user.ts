import http from '@/api'

export const login = (params: Recordable) => {
  return http.post('/system/user/login', params)
}

export const logout = () => {
  return http.get('/account/logout')
}

export const getUserInfo = () => {
  return http.get('/system/user/info')
}

// 获取菜单权限列表
export const getMenuList = () => {
  return http.get('/system/user/react-admin-list')
}

// 获取按钮权限列表
export const getButtonData = () => {
  return http.get('/system/user/button')
}
