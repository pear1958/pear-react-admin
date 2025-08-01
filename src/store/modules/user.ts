import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { shallow } from 'zustand/vanilla/shallow'
import { cloneDeep } from 'lodash-es'
import { UserState, UserStore } from '../types'
import { useAuthStore } from './auth'
import { useTabsStore } from './tabs'
import { removeToken, setToken } from '@/utils/auth'
import { login, logout } from '@/api/modules/auth'

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
      async logout() {
        await logout()
        get().reset()
        removeToken()
        useAuthStore.getState().reset()
        useTabsStore.getState().reset()
      },
      reset() {
        set(cloneDeep(initialState))
      }
    }))
  ),
  shallow
)
