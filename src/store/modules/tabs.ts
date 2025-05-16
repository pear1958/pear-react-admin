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
          setTabsList(tabsList) {
            set((draft: TabsState) => {
              draft.tabsList = tabsList
            })
          },
          addTab(tab) {
            set((draft: TabsState) => {
              if (draft.tabsList.every(item => item.path !== tab.path)) {
                draft.tabsList.push(tab)
              }
            })
          },
          removeTab(path, isCurrent) {
            set((draft: TabsState) => {
              const tempList = cloneDeep(draft.tabsList)
              // 此tab不能删除
              if (!draft.tabsList.find(item => item.path === path)?.closable) return
              // 删除
              draft.tabsList = draft.tabsList.filter(item => item.path !== path)

              if (!draft.tabsList.length) {
                window.$navigate(HOME_URL)
                return
              }

              // 删除当前tab -> 需要处理路由跳转
              if (isCurrent) {
                tempList.forEach((item, index) => {
                  if (item.path !== path) return
                  const nextTab = tempList[index + 1] || tempList[index - 1]
                  nextTab && window.$navigate(nextTab.path)
                })
              }
            })
          },
          removeTabsSide: (path, type) => {
            set((draft: TabsState) => {
              const currentIndex = draft.tabsList.findIndex(item => item.path === path)
              if (currentIndex === -1) return
              if (type === 'left') {
                draft.tabsList = draft.tabsList.filter((item, index) => {
                  return index >= currentIndex || !item.closable
                })
              }
              if (type === 'right') {
                draft.tabsList = draft.tabsList.filter((item, index) => {
                  return index <= currentIndex || !item.closable
                })
              }
            })
          },
          closeMultipleTab: path => {
            set((draft: TabsState) => {
              draft.tabsList = draft.tabsList.filter(item => {
                return item.path === path || !item.closable
              })
              if (!path) window.$navigate(HOME_URL)
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
