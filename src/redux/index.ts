import {
  combineReducers,
  configureStore,
  type ThunkAction,
  type UnknownAction
} from '@reduxjs/toolkit'
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  type TypedUseSelectorHook
} from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { isDev } from '@/utils'
import deviceReducer from './modules/device'

const rootReducer = combineReducers({
  device: deviceReducer
})

export type R = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: persistReducer<R>(
    {
      key: 'pear-redux',
      storage
      // blacklist: ['auth']
    },
    rootReducer
  ),
  // Redux Toolkit 默认包含 redux-thunk 中间件
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ serializableCheck: false }).concat([]) // 禁用状态序列化检查
  },
  devTools: isDev
})

export const persistor = persistStore(store)

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export type Thunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, UnknownAction>

// 创建有类型提示的方法
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector
export const useDispatch = () => useReduxDispatch<Dispatch>()

export default store
