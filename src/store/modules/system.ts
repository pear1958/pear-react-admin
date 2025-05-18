import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'
import { shallow } from 'zustand/vanilla/shallow'
import { SystemState, SystemStore } from '../types'

export const useSystemStore = createWithEqualityFn<SystemStore>()(
  devtools(
    immer(
      persist(
        set => ({
          sideBar: {
            isCollapse: false,
            width: 210
          },
          isDark: false,
          primary: '#e61010',
          componentSize: 'middle',
          compactAlgorithm: false,
          borderRadius: 6,
          language: null, // 默认为浏览器的默认语言
          accordion: true,
          watermark: true,
          mainMaximize: false,
          setSystemState: (key, value) => {
            set((state: SystemState) => {
              state[key] = value
            })
          },
          setCollapse: (isCollapse: boolean) => {
            set((state: SystemState) => {
              state.sideBar.isCollapse = isCollapse
              state.sideBar.width = isCollapse ? 64 : 210
            })
          }
        }),
        {
          name: 'pear-system',
          version: 1.0
        }
      )
    )
  ),
  // useStore(state => ({ xxx }))
  // 默认是直接比较引用值, ===, 每次状态更新 -> 触发组件重新渲染
  // 比较新旧对象的所有顶层属性
  shallow
)
