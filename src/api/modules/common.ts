import http from '..'

export const uploadFile = (data: Recordable) => {
  return http.post('/upload', data)
}
