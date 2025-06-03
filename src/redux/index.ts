import { combineReducers, configureStore, type Middleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'
// import logger from 'redux-logger'
import deviceReducer from './modules/device'
import { isDev } from '@/utils'

export const store = configureStore({
  reducer: persistReducer(
    {
      key: 'pear-redux',
      storage
      // blacklist: ['auth']
    },
    combineReducers({
      device: deviceReducer
    })
  ),
  // Redux Toolkit 默认包含 redux-thunk 中间件
  middleware: getDefaultMiddleware => {
    // 禁用状态序列化检查
    return getDefaultMiddleware({ serializableCheck: false }).concat([])
  },
  devTools: isDev
})

export const persistor = persistStore(store)
