import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { shallow } from 'zustand/vanilla/shallow'
import { cloneDeep } from 'lodash-es'
import { UserState, UserStore } from '../types'
import { useAuthStore } from './auth'
import { useTabsStore } from './tabs'
import { removeToken, setToken } from '@/utils/auth'
import { LOGIN_URL } from '@/config/constant'
import { message } from '@/hooks/useMessage'
import { login } from '@/api/modules/auth'

const initialState = {
  userInfo: {}
}

export const useUserStore = createWithEqualityFn<UserStore>()(
  devtools(
    immer((set, get) => ({
      ...initialState,
      async login(params: Recordable) {
        const { data } = await login(params)
        setToken(data.token)
      },
      setUserInfo(userInfo) {
        set((state: UserState) => {
          state.userInfo = userInfo
        })
      },
      logout() {
        removeToken()
        window.$navigate(LOGIN_URL, { replace: true })
        message.success('退出成功')
        setTimeout(() => {
          get().reset()
          useAuthStore.getState().reset()
          useTabsStore.getState().reset()
        }, 100)
      },
      reset() {
        set(cloneDeep(initialState))
      }
    }))
  ),
  shallow
)
