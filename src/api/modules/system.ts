import http from '..'

export const getMenuList = (params: Recordable) => {
  return http.get('/menu/list', params)
}
