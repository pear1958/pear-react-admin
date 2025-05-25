import { useRef } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import useColumns from './useColumns'
import { getInsuranceList } from '@/api/modules/insurance'

const JsonTable = () => {
  const { columns } = useColumns()
  const actionRef = useRef<ActionType>(undefined)

  const handleAdd = () => {
    // 测试刷新
    actionRef.current?.reload()
  }

  return (
    <ProTable
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async params => {
        const res = await getInsuranceList(params)
        return {
          data: res.list,
          total: res.total,
          success: true
        }
      }}
      editable={{
        type: 'multiple'
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true }
        },
        onChange(value) {
          // console.log('value: ', value)
        }
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto'
      }}
      options={{
        setting: {
          listsHeight: 400
        }
      }}
      form={{
        // 由于转换是配置的，提交的参数与定义的参数不同，因此需要在这里对它们进行转换
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime]
            }
          }
          return values
        }
      }}
      pagination={{
        pageSize: 10
      }}
      dateFormatter="string"
      headerTitle="保险列表"
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
