export const LOGIN_URL = '/login'

export const HOME_URL = '/home'

export const ERROR_404_URL = '/error/404'

export const ERROR_404_NAME = 'Error404'

export const ROUTER_WHITE_LIST: string[] = ['/xxx']

export const TOKEN_KEY = 'user-token'

export const ROUTER_404 = {
  path: ERROR_404_URL,
  element: '/error/404',
  meta: {
    name: ERROR_404_NAME,
    title: '404',
    hidden: true,
    keepAlive: false
  }
}
