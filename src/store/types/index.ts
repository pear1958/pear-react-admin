export type ComponentSize = 'small' | 'middle' | 'large'
export type LanguageType = 'zh' | 'en' | null

export interface SystemState {
  isDark: boolean
  primary: string
  componentSize: ComponentSize
  compactAlgorithm: boolean
  borderRadius: number
  language: LanguageType
  accordion: boolean
}

export interface SystemAction {
  setSystemState: <T extends keyof SystemState>(key: T, value: SystemState[T]) => void
}

export type SystemStore = SystemState & SystemAction

export interface UserState {
  userInfo: Recordable | null
}

export interface UserAction {
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
  setMenuList: (menuList: AuthState['menuList']) => void
  setButtonData: (data: AuthState['buttonData']) => void
}

export type AuthStore = AuthState & AuthAction
