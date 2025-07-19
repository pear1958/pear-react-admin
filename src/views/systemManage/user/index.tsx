import { ProTable } from '@ant-design/pro-components'
import useConfig from './useConfig'
import { getUserList } from '@/api/modules/systemManage'
import { formatResponse } from '@/utils'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const UserManage = () => {
  const { columns, tableRef, refresh, handleAdd } = useConfig()

  return (
    <ProTable
      className="ant-pro-table-scroll"
      actionRef={tableRef}
      columns={columns.map(col => ({
        ...col,
        align: 'center'
      }))}
      rowKey="id"
      request={async params => {
        return formatResponse(await getUserList(params))
      }}
      scroll={{ x: 1000, y: '100%' }}
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary" onClick={handleAdd}>
          新增
        </Button>,
        <Button>导出</Button>
      ]}
    />
  )
}

export default UserManage
