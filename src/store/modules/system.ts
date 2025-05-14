import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { shallow } from 'zustand/vanilla/shallow'
import { SystemState, SystemStore } from '../types'

export const useSystemStore = createWithEqualityFn<SystemStore>()(
  immer(
    persist(
      set => ({
        isDark: false,
        primary: '#e61010',
        componentSize: 'middle',
        compactAlgorithm: false,
        borderRadius: 6,
        language: null, // 默认为浏览器的默认语言
        accordion: true,
        setSystemState: (key, value) => {
          set((state: SystemState) => {
            state[key] = value
          })
        }
      }),
      {
        name: 'pear-system',
        version: 1.0
      }
    )
  ),
  // useStore(state => ({ xxx }))
  // 默认是直接比较引用值, ===, 每次状态更新 -> 触发组件重新渲染
  // 比较新旧对象的所有顶层属性
  shallow
)
