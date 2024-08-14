import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PermissionState } from '../types'

const permissionSlice = createSlice({
  name: 'permission',
  initialState: {
    // 菜单权限
    menuList: [],
    // 用户所有的按钮权限
    buttonData: null,
    // 当前页面的 route name, 用来做按钮权限筛选
    curRouteName: '',
  } as PermissionState,
  reducers: {
    setMenuList(state, { payload }: PayloadAction<MenuList>) {
      state.menuList = payload
    },
  },
})

export const { setMenuList } = permissionSlice.actions

export default permissionSlice.reducer