import { createSelector, createSlice } from '@reduxjs/toolkit'
import { DeviceState } from '../types'

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
  engineList: []
}

const deviceSlice = createSlice({
  name: 'pear-device',
  initialState: deviceState,
  reducers: {
    setDeviceState(state: DeviceState, { payload }) {
      state[payload.key] = payload.value
    }
  }
})

// getters
const selectAllUsers = state => state.device.users

export const selectOnlineUsers = createSelector([selectAllUsers], users => {
  return users.filter(item => item.online)
})

export const selectUserById = createSelector(
  [selectAllUsers, (state, name) => name],
  (users, name) => {
    return users.find(item => item.name === name)
  }
)

export const { setDeviceState } = deviceSlice.actions

export default deviceSlice.reducer
