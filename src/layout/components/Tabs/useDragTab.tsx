import { cloneElement } from 'react'
import type { DragEndEvent } from '@dnd-kit/core'
import { closestCenter, DndContext, PointerSensor, useSensor } from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useTabsStore } from '@/store'
import { TabItem } from '@/store/types'

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-node-key': string
}

const useDragTab = (items: Recordable[]) => {
  const { tabsList, setTabsList } = useTabsStore(state => ({
    tabsList: state.tabsList,
    setTabsList: state.setTabsList
  }))

  const DraggableTabNode: React.FC<Readonly<DraggableTabPaneProps>> = ({ className, ...props }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id: props['data-node-key']
    })

    const style: React.CSSProperties = {
      ...props.style,
      transform: CSS.Translate.toString(transform),
      transition
    }

    return cloneElement(props.children as React.ReactElement<any>, {
      ref: setNodeRef,
      style,
      ...attributes,
      ...listeners
    })
  }

  const sensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const activeIndex = tabsList.findIndex(i => i.path === active.id)
      const overIndex = tabsList.findIndex(i => i.path === over?.id)
      setTabsList(arrayMove<TabItem>(tabsList, activeIndex, overIndex))
    }
  }

  const renderTabBar = (tabBarProps, DefaultTabBar) => (
    <DndContext sensors={[sensor]} onDragEnd={onDragEnd} collisionDetection={closestCenter}>
      <SortableContext items={items.map(i => i.key)} strategy={horizontalListSortingStrategy}>
        <DefaultTabBar {...tabBarProps}>
          {node => (
            <DraggableTabNode
              {...(node as React.ReactElement<DraggableTabPaneProps>).props}
              key={node.key}
            >
              {node}
            </DraggableTabNode>
          )}
        </DefaultTabBar>
      </SortableContext>
    </DndContext>
  )

  return {
    renderTabBar
  }
}

export default useDragTab
