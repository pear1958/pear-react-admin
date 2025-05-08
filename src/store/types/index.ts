export type ComponentSize = 'small' | 'middle' | 'large'
export type LanguageType = 'zh' | 'en'

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
