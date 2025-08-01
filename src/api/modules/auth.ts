import http from '..'

export const getLoginCode = (params: { width?: number; height?: number }) => {
  return http.get('/auth/captcha/img', params)
}

export const login = (params: Recordable) => {
  return http.post('/auth/login', params)
}
