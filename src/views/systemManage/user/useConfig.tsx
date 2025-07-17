import { ProColumns } from '@ant-design/pro-components'

const useConfig = () => {
  const columns: ProColumns<Recordable>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
      align: 'center'
    },
    {
      title: '用户名',
      dataIndex: 'username',
      align: 'center'
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      align: 'center'
    },
    {
      title: '备注',
      dataIndex: 'remark',
      ellipsis: true,
      align: 'center'
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      sorter: true,
      align: 'center'
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
      sorter: true,
      align: 'center'
    }
  ]

  return {
    columns
  }
}

export default useConfig
