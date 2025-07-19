import { ProTable } from '@ant-design/pro-components'
import useConfig from './useConfig'
import { getUserList } from '@/api/modules/systemManage'
import { formatResponse } from '@/utils'

const UserManage = () => {
  const { columns, tableRef } = useConfig()

  return (
    <div>
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
      />
    </div>
  )
}

export default UserManage
