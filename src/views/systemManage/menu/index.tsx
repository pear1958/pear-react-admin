import { useRef } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import useColumns from './useColumns'
import { getMenuList } from '@/api/modules/system'

const JsonTable = () => {
  const { columns } = useColumns()
  const actionRef = useRef<ActionType>(undefined)

  const handleAdd = () => {
    // 测试刷新
    actionRef.current?.reload()
  }

  return (
    <ProTable
      className="pear-table"
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async params => {
        console.log('searchParams', params)
        const res = await getMenuList(params)
        return {
          data: res.list,
          total: res.total,
          success: true
        }
      }}
      rowKey="path"
      search={{
        labelWidth: 'auto'
      }}
      // 默认情况下，会显示 刷新、密度调整、列设置 等基础功能按钮
      // 开发者可通过 options 自定义这些按钮的显隐或扩展功能
      options={{
        fullScreen: true,
        setting: {
          // 表格列设置面板最大高度
          listsHeight: 400
        }
      }}
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
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
  )
}

export default JsonTable
