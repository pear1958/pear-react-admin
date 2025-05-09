export type ComponentSize = 'small' | 'middle' | 'large'
export type LanguageType = 'zh' | 'en' | null

export interface SystemState {
  isDark: boolean
  primary: string
  componentSize: ComponentSize
  compactAlgorithm: boolean
  borderRadius: number
  language: LanguageType
}

export interface SystemAction {
  setSystemState: <T extends keyof SystemState>(key: T, value: SystemState[T]) => void
}

export type SystemStore = SystemState & SystemAction

export interface UserState {
  token: string
  userInfo: Recordable | null
}

export interface UserAction {
  setToken: (token: UserState['token']) => void
  getUserInfo: () => Promise<boolean>
  setUserInfo: (userInfo: UserState['userInfo']) => void
}

export type UserStore = UserState & UserAction

export interface AuthState {
  curRouteName: string
  buttonData: Recordable<string[]> | null
  menuList: Recordable[]
  flatMenuList: Recordable[]
  showMenuList: Recordable[]
}

export interface AuthAction {
  getMenuList: () => Promise<boolean>
  setMenuList: (menuList: AuthState['menuList']) => void
  getButtonData: () => Promise<boolean>
  setButtonData: (data: AuthState['buttonData']) => void
}

export type AuthStore = AuthState & AuthAction
