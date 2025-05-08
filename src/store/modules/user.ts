import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { shallow } from 'zustand/vanilla/shallow'
import { UserState, UserStore } from '../types'

export const useUserStore = createWithEqualityFn<UserStore>()(
  immer(
    persist(
      set => ({
        token: '',
        userInfo: null,
        setToken: token =>
          set((state: UserState) => {
            state.token = token
          }),
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
