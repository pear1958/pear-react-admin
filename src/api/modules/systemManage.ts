import http from '..'

export const getMenuList = (params: Recordable) => {
  return http.get('/system/menu/list', params)
}

export const getUserList = (params: Recordable) => {
  return http.get('/system/user', params)
}
