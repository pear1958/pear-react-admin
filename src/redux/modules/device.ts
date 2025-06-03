import { createSlice } from '@reduxjs/toolkit'

const deviceState = {
  engineList: []
}

const deviceSlice = createSlice({
  name: 'pear-device',
  initialState: deviceState,
  reducers: {
    setDeviceState(state, { payload }) {
      state[payload.key] = payload.value
    }
  }
})

export const { setDeviceState } = deviceSlice.actions

export default deviceSlice.reducer
