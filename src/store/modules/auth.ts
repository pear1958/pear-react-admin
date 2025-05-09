import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { shallow } from 'zustand/vanilla/shallow'
import { getFlatArr } from 'pear-common-utils'
import { AuthState, AuthStore } from '../types'
import { filterMenuList } from '@/router/utils'
import { getButtonData, getMenuList } from '@/api/modules/auth'
import { notification } from '@/hooks/useMessage'

export const useAuthStore = createWithEqualityFn<AuthStore>()(
  immer(
    persist(
      (set, get) => ({
        // 菜单权限
        menuList: [],
        flatMenuList: [],
        // 菜单权限列表 ==> 左侧菜单栏渲染, 需要剔除 showInMenu == false
        showMenuList: [],
        // 用户所有的按钮权限
        buttonData: null,
        // 当前页面的 route name, 用来做按钮权限筛选
        curRouteName: '',
        getMenuList: () => {
          return new Promise((resolve, reject) => {
            getMenuList()
              .then(data => {
                if (!data?.length) {
                  notification.warning({
                    message: '无权限访问',
                    description: '当前账号无任何菜单权限，请联系系统管理员！'
                  })
                  // setToken(null)
                }
                get().setMenuList(data ?? [])
                resolve(true)
              })
              .catch(() => {
                reject(false)
              })
          })
        },
        setMenuList: menuList =>
          set((state: AuthState) => {
            state.menuList = menuList
            state.flatMenuList = getFlatArr(menuList)
            state.showMenuList = filterMenuList(menuList)
          }),
        getButtonData: async () => {
          return new Promise((resolve, reject) => {
            getButtonData()
              .then(data => {
                get().setButtonData(data)
                resolve(true)
              })
              .catch(() => {
                reject(false)
              })
          })
        },
        setButtonData: data =>
          set((state: AuthState) => {
            state.buttonData = data
          })
      }),
      {
        name: 'pear-auth',
        version: 1.0
      }
    )
  ),
  shallow
)
