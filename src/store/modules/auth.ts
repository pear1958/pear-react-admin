import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { shallow } from 'zustand/vanilla/shallow'
import { cloneDeep } from 'lodash-es'
import { getFlatArr } from 'pear-common-utils'
import { AuthState, AuthStore } from '../types'
import { filterMenuList } from '@/router/utils'

const initialState = {
  // 菜单权限
  menuList: [],
  flatMenuList: [],
  // 菜单权限列表 ==> 左侧菜单栏渲染, 需要剔除 showInMenu == false
  showMenuList: [],
  // 用户所有的按钮权限
  buttonData: null,
  // 当前页面的 route name, 用来做按钮权限筛选
  curRouteName: ''
}

export const useAuthStore = createWithEqualityFn<AuthStore>()(
  immer(set => ({
    ...initialState,
    setMenuList(menuList) {
      set((state: AuthState) => {
        state.menuList = menuList
        state.flatMenuList = getFlatArr(menuList)
        state.showMenuList = filterMenuList(menuList)
      })
    },
    setButtonData(data) {
      set((state: AuthState) => {
        state.buttonData = data
      })
    },
    reset() {
      set(cloneDeep(initialState))
    }
  })),
  shallow
)
