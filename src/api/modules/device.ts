import http from '..'

export const getDeviceList = (id: string) => {
  return http.get('/device/list', { id })
}
