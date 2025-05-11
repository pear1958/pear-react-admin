import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { shallow } from 'zustand/vanilla/shallow'
import { UserState, UserStore } from '../types'

export const useUserStore = createWithEqualityFn<UserStore>()(
  immer(set => ({
    userInfo: null,
    setUserInfo: userInfo =>
      set((state: UserState) => {
        state.userInfo = userInfo
      })
  })),
  shallow
)
