export type ComponentSize = 'small' | 'middle' | 'large'
export type LanguageType = 'zh' | 'en' | null

interface BaseAction {
  reset: () => void
}

export interface SystemState {
  isDark: boolean
  primary: string
  componentSize: ComponentSize
  compactAlgorithm: boolean
  borderRadius: number
  language: LanguageType
  accordion: boolean
  watermark: boolean
}

export interface SystemAction {
  setSystemState: <T extends keyof SystemState>(key: T, value: SystemState[T]) => void
}

export type SystemStore = SystemState & SystemAction

export interface UserState {
  userInfo: Recordable | null
}

export interface UserAction extends BaseAction {
  setUserInfo: (userInfo: UserState['userInfo']) => void
  logout: () => void
}

export type UserStore = UserState & UserAction

export interface AuthState {
  routeName: string
  buttonData: Recordable<string[]>
  menuList: Recordable[]
  flatMenuList: Recordable[]
  showMenuList: Recordable[]
}

export interface AuthAction extends BaseAction {
  setMenuList: (menuList: AuthState['menuList']) => void
  setButtonData: (data: AuthState['buttonData']) => void
  setRouteName: (data: AuthState['routeName']) => void
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
}

export interface TabsAction extends BaseAction {
  addTab: (tab: TabItem) => void
  removeTab: (path: string, isCurrent: boolean) => void
  setTabsList: (tabsList: TabsState['tabsList']) => void
}

export type TabsStore = TabsState & TabsAction
