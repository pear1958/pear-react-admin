import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { DeviceState } from '../types'
import { getDeviceList } from '@/api/modules/device'
import { State, Thunk } from '..'

const deviceState: DeviceState = {
  users: [
    {
      id: 1,
      name: 'zhangsan',
      online: false
    },
    {
      id: 2,
      name: 'lisi',
      online: true
    },
    {
      id: 3,
      name: 'wangwu',
      online: true
    },
    {
      id: 7,
      name: null,
      online: true,
      salary: 3500
    }
  ],
  deviceList: []
}

const deviceSlice = createSlice({
  name: 'pear-device',
  initialState: deviceState,
  reducers: {
    // 泛型表示可传可不传
    setDeviceState<T extends keyof DeviceState>(
      state: DeviceState,
      { payload }: PayloadAction<ObjToKeyValUnion<DeviceState>>
    ) {
      state[payload.key as T] = payload.value as DeviceState[T]
    },
    // type 默认为 sliceName/actionName, payload为传递过来的数据
    setDeviceList(state: DeviceState, { payload }: PayloadAction<DeviceState['deviceList']>) {
      state.deviceList = payload
    }
  }
})

// getters 类似于计算属性
const selectAllUsers = (state: State) => state.device.users

export const selectOnlineUsers = createSelector([selectAllUsers], (users: DeviceState['users']) => {
  return users.filter(item => item.online)
})

export const selectUserById = createSelector(
  [selectAllUsers, (state, name) => name],
  (users: DeviceState['users'], name) => {
    return users.find(item => item.name === name)
  }
)

// 同步actions
export const { setDeviceState } = deviceSlice.actions

// 异步actions
export const fetchDevice = (id: string): Thunk => {
  return async (dispatch, getState) => {
    const { data } = await getDeviceList(id)
    dispatch(deviceSlice.actions.setDeviceList(data))
  }
}

export default deviceSlice.reducer
