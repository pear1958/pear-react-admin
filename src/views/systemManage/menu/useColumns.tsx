import { Button, Select, Tag } from 'antd'
import { ProColumns, TableDropdown } from '@ant-design/pro-components'
import { Icon } from '@iconify-icon/react'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'

const useColumns = () => {
  const columns: ProColumns[] = [
    {
      title: '菜单名称',
      dataIndex: ['meta', 'title'],
      formItemProps: {
        name: 'title'
      }
    },
    {
      title: '图标',
      dataIndex: ['meta', 'icon'],
      width: 50,
      align: 'center',
      search: false,
      render: (_, record) => {
        if (!record.meta.icon) return '-'
        return <Icon icon={record.meta.icon} />
      }
    },
    {
      title: '排序',
      dataIndex: ['meta', 'order'],
      width: 50,
      align: 'center',
      search: false
    },
    {
      title: '类型',
      dataIndex: 'type',
      width: 80,
      align: 'center',
      search: false,
      render: (_, record) => {
        if (record.redirect) return <Tag color="warning">目录</Tag>
        return <Tag color="success">菜单</Tag>
      }
    },
    {
      title: '路由路径',
      dataIndex: 'path',
      search: false,
      copyable: true
    },
    {
      title: '组件路径',
      dataIndex: 'element',
      search: false,
      copyable: true,
      ellipsis: true
    },
    {
      title: '菜单状态',
      dataIndex: ['meta', 'status'],
      align: 'center',
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
      },
      formItemProps: {
        name: 'status'
      }
    },
    {
      title: '显示状态',
      dataIndex: ['meta', 'show'],
      width: 100,
      align: 'center',
      tooltip: '选择隐藏则路由将不会出现在侧边栏，但仍然可以访问',
      render: (_, record) => {
        const { status } = record.meta
        if (status === '0') return <Tag color="red">隐藏</Tag>
        if (status === '1') return <Tag color="green">显示</Tag>
        return '-'
      },
      fieldProps: {
        placeholder: '请选择'
      },
      formItemProps: {
        name: 'show'
      },
      initialValue: '1',
      renderFormItem: () => {
        const options = [
          {
            label: '隐藏',
            value: '0'
          },
          {
            label: '显示',
            value: '1'
          }
        ]
        return <Select options={options} />
      }
    },
    {
      title: '是否缓存',
      dataIndex: ['meta', 'keepAlive'],
      search: false,
      width: 80,
      align: 'center',
      render: (_, record) => {
        if (record.redirect) return '-'
        return record.meta.keepAlive ? '是' : '否'
      }
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      search: false,
      align: 'center',
      valueType: 'dateTime' // 'date'
    },
    {
      title: '更新时间',
      dataIndex: 'update_at',
      search: false,
      align: 'center',
      valueType: 'dateTime'
    },
    {
      title: '操作',
      key: 'option',
      search: false,
      align: 'center',
      width: 240,
      fixed: 'right',
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

            <TableDropdown
              key="actionGroup"
              onSelect={() => action?.reload()}
              menus={[
                { key: 'copy', name: '复制' },
                { key: 'delete', name: '删除' }
              ]}
            >
              <Button type="link">更多</Button>
            </TableDropdown>
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
