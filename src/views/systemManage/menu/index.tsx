import { useRef } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import useColumns from './useColumns'
import { getMenuList } from '@/api/modules/systemManage'
import { useModal } from '@/context/modal'
import useSpan from '@/hooks/useSpan'
import EditForm from './EditForm'

const JsonTable = () => {
  const { columns } = useColumns()
  const actionRef = useRef<ActionType>(undefined)

  const { span, layout } = useSpan()
  const { showModal, closeModal } = useModal()

  const openUserModal = () => {
    showModal(<EditForm />, {
      title: '新增菜单',
      width: 800
    })
  }

  const handleAdd = () => {
    openUserModal()
  }

  const refresh = () => {
    actionRef.current?.reload()
  }

  return (
    <div className="h-full">
      <ProTable
        className="ant-pro-table-scroll"
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async params => {
          console.log('searchParams', params)
          const { data } = await getMenuList(params)
          return {
            data: data.list,
            total: data.total,
            success: true
          }
        }}
        scroll={{ x: 1000, y: '100%' }}
        rowKey="path"
        search={{
          labelWidth: 'auto',
          span,
          layout
        }}
        // 默认情况下，会显示 刷新、密度调整、列设置 等基础功能按钮
        // 开发者可通过 options 自定义这些按钮的显隐或扩展功能
        options={{
          fullScreen: true
        }}
        pagination={{
          size: 'default',
          showSizeChanger: true,
          defaultPageSize: 10,
          pageSizeOptions: [2, 10, 20, 50, 100]
        }}
        dateFormatter="string"
        headerTitle="菜单列表"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={handleAdd}>
            新增
          </Button>,
          <Button>导出</Button>
        ]}
      />
    </div>
  )
}

export default JsonTable
