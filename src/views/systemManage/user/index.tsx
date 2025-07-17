import { useRef } from 'react'
import { ActionType, ProTable } from '@ant-design/pro-components'
import useConfig from './useConfig'
import { getUserList } from '@/api/modules/systemManage'

const UserManage = () => {
  // 获取表格实例
  const tableRef = useRef<ActionType>(null)
  const { columns } = useConfig()

  return (
    <div>
      <ProTable
        actionRef={tableRef}
        columns={columns}
        rowKey="id"
        request={async params => {
          console.log('searchParams', params)
          const {
            data: { items, meta }
          } = await getUserList(params)
          return {
            data: items,
            total: meta.totalItems,
            success: true
          }
        }}
      />
    </div>
  )
}

export default UserManage
