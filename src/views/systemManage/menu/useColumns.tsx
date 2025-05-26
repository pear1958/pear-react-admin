import { Button, Tag } from 'antd'
import { ProColumns, TableDropdown } from '@ant-design/pro-components'
import { Icon } from '@iconify-icon/react'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'

const useColumns = () => {
  const columns: ProColumns<Recordable>[] = [
    {
      title: '菜单名称',
      dataIndex: ['meta', 'title']
    },
    {
      title: '图标',
      dataIndex: ['meta', 'icon'],
      search: false,
      render: (_, record) => {
        if (!record.meta.icon) return '-'
        return <Icon icon={record.meta.icon} />
      }
    },
    {
      title: '排序',
      dataIndex: ['meta', 'orderNum'],
      search: false
    },
    {
      title: '组件路径',
      dataIndex: 'element',
      search: false,
      render: (_, record) => {
        if (record.redirect) return '--'
        return record.element
      }
    },
    {
      title: '菜单状态',
      dataIndex: ['meta', 'status'],
      tooltip: '停用则路由将不会出现在侧边栏，也不能被访问',
      valueEnum: {
        '0': {
          text: '停用',
          status: 'Error'
        },
        '1': {
          text: '启用',
          status: 'Success'
        }
      }
    },
    {
      title: '显示状态',
      dataIndex: ['meta', 'show'],
      tooltip: '选择隐藏则路由将不会出现在侧边栏，但仍然可以访问',
      render: (_, record) => {
        const { status } = record.meta
        if (!status) return '-'
        const statusMap = {
          '0': {
            text: '隐藏',
            color: 'red'
          },
          '1': {
            text: '显示',
            color: 'green'
          }
        }
        const item = statusMap[status]
        return <Tag color={item.color}>{item.text}</Tag>
      }
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      valueType: 'date'
    },
    {
      title: '更新时间',
      dataIndex: 'update_at',
      valueType: 'date'
    },
    {
      title: '操作',
      key: 'option',
      align: 'center',
      render: (text, record, index, action) => {
        // console.log('action', action)
        return (
          <div className="flex-c">
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => {
                action?.startEditable?.(record.id)
              }}
            >
              修改
            </Button>

            <Button type="link" icon={<PlusOutlined />}>
              新增
            </Button>

            <Button type="link" icon={<DeleteOutlined />}>
              删除
            </Button>

            {/* <TableDropdown
              key="actionGroup"
              onSelect={() => action?.reload()}
              menus={[
                { key: 'copy', name: '复制' },
                { key: 'delete', name: '删除' }
              ]}
            >
              更多
            </TableDropdown> */}
          </div>
        )
      }
    }
  ]

  return {
    columns
  }
}

export default useColumns
