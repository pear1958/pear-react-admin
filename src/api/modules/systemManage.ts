import http from '..'

export const getMenuList = (params: Recordable) => {
  return http.get('/system/menu/list', params)
}
