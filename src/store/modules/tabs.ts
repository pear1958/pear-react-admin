import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { TabsState, TabsStore } from '../types'

export const useTabsStore = createWithEqualityFn<TabsStore>()(
  immer(
    persist(
      set => ({
        tabsList: [],
        addTab: tab => {
          set((draft: TabsState) => {
            if (draft.tabsList.every(item => item.path !== tab.path)) {
              draft.tabsList.push(tab)
            }
          })
        },
        setTabsList: tabsList => {
          set((draft: TabsState) => {
            draft.tabsList = tabsList
          })
        }
      }),
      {
        name: 'pear-tabs',
        version: 1.0
      }
    )
  ),
  shallow
)
