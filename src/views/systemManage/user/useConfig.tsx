import { useRef } from 'react'
import { Button, Image, Space, Switch, Tag } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  InfoCircleFilled
} from '@ant-design/icons'
import { ActionType, ProColumns } from '@ant-design/pro-components'
import { fallbackImg } from '@/config/constant'
import { modal, message } from '@/hooks/useMessage'
import { editUser, deleteUser } from '@/api/modules/systemManage'
import EditForm from './EditForm'

export enum UserStatus {
  Disable = 0,
  Enabled = 1
}

const useConfig = () => {
  // 获取表格实例
  const tableRef = useRef<ActionType>(null)

  // 根据当前所有参数刷新表格
  const refresh = () => {
    tableRef.current.reload()
  }

  const reset = () => {
    tableRef.current.reset()
  }

  const changeStatus = (row: Recordable) => {
    modal.confirm({
      icon: <InfoCircleFilled style={{ color: '#1890ff' }} />,
      title: '确认',
      content: `确认要${row.status === UserStatus.Disable ? '启' : '禁'}用该用户`,
      closable: true,
      onOk: () =>
        new Promise<void>(async resolve => {
          await editUser({ ...row, status: +!row.status })
          message.success('操作成功')
          refresh()
          resolve()
        })
    })
  }

  const handleAdd = () => {
    const modalIns = modal.confirm({
      icon: null,
      title: '新增用户',
      content: <EditForm refresh={refresh} close={() => modalIns.destroy()} />,
      closable: true,
      width: 600,
      footer: null
    })
  }

  const delUser = (id: number) => {
    modal.confirm({
      icon: <ExclamationCircleFilled />,
      title: '确认',
      content: '确认要删除该用户',
      closable: true,
      onOk: () =>
        new Promise<void>(async resolve => {
          // await deleteUser(id)
          message.success('操作成功')
          refresh()
          resolve()
        })
    })
  }

  const columns: ProColumns<Recordable>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      // 不显示但字段存在
      // hideInSearch: true
      search: false,
      render: (_, row) => {
        if (!row.avatar) return '-'
        return (
          <Image
            src={row.avatar}
            width={60}
            height={60}
            fallback={fallbackImg}
            className="rounded-full"
          />
        )
      }
    },
    {
      title: '用户名',
      dataIndex: 'username'
    },
    {
      title: '昵称',
      dataIndex: 'nickname'
    },
    {
      title: '所在部门',
      render: (_, row) => (row.dept?.name ? <Tag color="default">{row.dept?.name}</Tag> : '-')
    },
    {
      title: '所属角色',
      render: (_, row) =>
        row.roles?.length ? (
          <Space direction="vertical">
            {row.roles.map((item: Recordable) => (
              <Tag color="processing">{item.name}</Tag>
            ))}
          </Space>
        ) : (
          '-'
        )
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 160
    },
    {
      title: '手机',
      dataIndex: 'phone',
      width: 160
    },
    {
      title: '备注',
      dataIndex: 'remark',
      ellipsis: true
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: (_, row) => {
        if ([UserStatus.Enabled, UserStatus.Disable].includes(row.status)) {
          return (
            <Switch
              checkedChildren="启用"
              unCheckedChildren="禁用"
              checked={row.status === UserStatus.Enabled}
              onChange={() => changeStatus(row)}
            />
          )
        }
        return '-'
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      width: 160
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
      width: 160
    },
    {
      title: '操作',
      dataIndex: 'todo',
      fixed: 'right',
      // 自动隐藏搜索
      valueType: 'option',
      render: (text, row, _, action) => (
        <>
          <Button type="link" icon={<EditOutlined />}>
            编辑
          </Button>
          <Button type="link" icon={<DeleteOutlined />} onClick={() => delUser(row.id)}>
            删除
          </Button>
        </>
      )
    }
  ]

  return {
    columns,
    tableRef,
    refresh,
    handleAdd
  }
}

export default useConfig
