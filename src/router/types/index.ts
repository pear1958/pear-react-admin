import { RouteObject } from 'react-router-dom'

export interface Meta {
  key?: string
  icon?: string
  title?: string
  // activeMenu?: string
  // isLink?: string
  showInMenu?: boolean
  isFull?: boolean
  // isAffix?: boolean
  keepAlive?: boolean
}

export type IRoute = Omit<RouteObject, 'children' | 'component'> & {
  redirect?: string
  meta?: Meta
  children?: IRoute[]
  component?: React.ReactNode | null
}