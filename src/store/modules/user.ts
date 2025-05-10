import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { shallow } from 'zustand/vanilla/shallow'
import { UserState, UserStore } from '../types'
import { getUserInfo } from '@/api/modules/user'

export const useUserStore = createWithEqualityFn<UserStore>()(
  immer(
    persist(
      (set, get) => ({
        token: '',
        userInfo: null,
        setToken: token =>
          set((state: UserState) => {
            state.token = token
            if (token) localStorage.setItem('token', token)
            else localStorage.removeItem(token)
          }),
        getUserInfo: async () => {
          return new Promise((resolve, reject) => {
            getUserInfo()
              .then(data => {
                get().setUserInfo(data)
                resolve(true)
              })
              .catch(() => {
                reject(false)
              })
          })
        },
        setUserInfo: userInfo =>
          set((state: UserState) => {
            state.userInfo = userInfo
          })
      }),
      {
        name: 'pear-user',
        version: 1.0
      }
    )
  ),
  shallow
)
