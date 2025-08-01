export type ComponentSize = 'small' | 'middle' | 'large'
export type LanguageType = 'zh' | 'en' | null

interface BaseAction {
  reset: () => void
}

export interface SystemState {
  sideBar: {
    isCollapse: boolean
    width: 64 | 210
  }
  isDark: boolean
  primary: string
  grayMode: boolean
  weakMode: boolean
  componentSize: ComponentSize
  compactAlgorithm: boolean
  language: LanguageType
  accordion: boolean
  watermark: boolean
  mainMaximize: boolean
  settingVisible: boolean
}

export interface SystemAction {
  setSystemState: <T extends keyof SystemState>(key: T, value: SystemState[T]) => void
  setCollapse: (isCollapse: boolean) => void
}

export type SystemStore = SystemState & SystemAction

export interface UserState {
  userInfo: Recordable
}

export interface UserAction extends BaseAction {
  login: (params: Recordable) => Promise<void>
  setUserInfo: (userInfo: UserState['userInfo']) => void
  logout: () => Promise<void>
}

export type UserStore = UserState & UserAction

export interface AuthState {
  buttonData: Recordable<string[]>
  menuList: Recordable[]
  flatMenuList: Recordable[]
  showMenuList: Recordable[]
}

export interface AuthAction extends BaseAction {
  setMenuList: (menuList: AuthState['menuList']) => void
  setButtonData: (data: AuthState['buttonData']) => void
}

export type AuthStore = AuthState & AuthAction

export interface TabItem {
  title: string
  path: string
  closable: boolean
}

export type TabList = TabItem[]

export interface TabsState {
  tabsList: TabList
  keepAliveList: string[]
}

export type Side = 'left' | 'right'

export interface TabsAction extends BaseAction {
  setTabsList: (tabsList: TabsState['tabsList']) => void
  addTab: (tab: TabItem) => void
  removeTab: (path: string, isCurrent: boolean) => void
  removeTabsSide: (path: string, type: Side) => void
  closeMultipleTab: (path?: string) => void
  findKeepAliveIndex: (name: string) => number
  addKeepAlive: (name: string) => void
  removeKeepAlive: (name: string, type?: Side | 'other' | 'all') => void
}

export type TabsStore = TabsState & TabsAction
