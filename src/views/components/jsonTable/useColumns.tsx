import { Space, Tag } from 'antd'
import { ProColumns, TableDropdown } from '@ant-design/pro-components'

const useColumns = () => {
  const columns: ProColumns<Recordable>[] = [
    {
      title: '排序',
      dataIndex: 'index',
      width: 48,
      align: 'center',
      search: false
    },
    {
      title: '姓名',
      dataIndex: 'title',
      align: 'center',
      copyable: true
    },
    {
      title: '状态',
      dataIndex: 'status',
      align: 'center',
      valueEnum: {
        all: { text: '良好', status: 'Default' },
        open: {
          text: '街溜子',
          status: 'Error'
        },
        processing: {
          text: '上进的人儿',
          status: 'Processing'
        },
        closed: {
          text: '优秀的人儿',
          status: 'Success',
          disabled: true
        }
      }
    },
    {
      title: '介绍页',
      dataIndex: 'introduce',
      align: 'center',
      render: text => <a>点我</a>
    },
    {
      title: '个性签名',
      tooltip: '这是学生的个性签名',
      dataIndex: 'individualText',
      ellipsis: true,
      search: false,
      align: 'center'
    },
    {
      title: '录入时间',
      dataIndex: 'created_at',
      valueType: 'date',
      align: 'center'
    },
    {
      title: '操作',
      key: 'option',
      align: 'center',
      render: (text, record, _, action) => (
        <div className="flex-c gap-3">
          <a
            key="editable"
            onClick={() => {
              action?.startEditable?.(record.id)
            }}
          >
            编辑
          </a>
          <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
            查看
          </a>
          <TableDropdown
            key="actionGroup"
            // name="更多"
            onSelect={() => action?.reload()}
            menus={[
              { key: 'copy', name: '复制' },
              { key: 'delete', name: '删除' }
            ]}
          />
        </div>
      )
    }
  ]

  return {
    columns
  }
}

export default useColumns
