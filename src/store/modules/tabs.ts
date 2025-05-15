import { createWithEqualityFn } from 'zustand/traditional'
import { immer } from 'zustand/middleware/immer'
import { createJSONStorage, persist } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { cloneDeep } from 'lodash-es'
import { TabsState, TabsStore } from '../types'
import { HOME_URL } from '@/config/constant'

const initialState = {
  tabsList: []
}

export const useTabsStore = createWithEqualityFn<TabsStore>()(
  devtools(
    immer(
      persist(
        set => ({
          ...initialState,
          addTab(tab) {
            set((draft: TabsState) => {
              if (draft.tabsList.every(item => item.path !== tab.path)) {
                draft.tabsList.push(tab)
              }
            })
          },
          setTabsList(tabsList) {
            set((draft: TabsState) => {
              draft.tabsList = tabsList
            })
          },
          removeTab(path, isCurrent) {
            set((draft: TabsState) => {
              // 不能删除的tab
              if (!draft.tabsList.find(item => item.path === path)?.closable) return

              // 删除当前tab -> 需要处理路由跳转
              if (isCurrent) {
                draft.tabsList.forEach((item, index) => {
                  if (item.path !== path) return
                  const nextTab = draft.tabsList[index + 1] || draft.tabsList[index - 1]
                  nextTab && window.$navigate(nextTab.path)
                })
              }

              // 实现真正删除
              draft.tabsList = draft.tabsList.filter(item => item.path !== path)

              if (!draft.tabsList.length) {
                window.$navigate(HOME_URL)
              }
            })
          },
          reset() {
            set(cloneDeep(initialState))
            useTabsStore.persist.clearStorage()
          }
        }),
        {
          name: 'pear-tabs',
          version: 1.0,
          storage: createJSONStorage(() => sessionStorage)
        }
      )
    )
  ),
  shallow
)
