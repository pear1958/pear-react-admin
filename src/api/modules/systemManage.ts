import http from '..'

export const getMenuList = (params: Recordable) => {
  return http.get('/systemManage/menu/list', params)
}
