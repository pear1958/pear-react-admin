import { useEffect, useRef, useState } from 'react'
import { Button, Input, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import useColumns from './useColumns'
import { getMenuList } from '@/api/modules/system'
import { useModal } from '@/context/modal'

const JsonTable = () => {
  const { columns } = useColumns()
  const actionRef = useRef<ActionType>(undefined)

  const { showModal, closeModal } = useModal()

  const UserForm = () => {
    // console.log(message)

    useEffect(() => {
      console.log('我被挂载了')
      return () => console.log('我被卸载了')
    }, [])

    return (
      <div>
        <Input placeholder="请输入测试文字" />
        <div>
          <Button type="primary" onClick={closeModal}>
            手动关闭
          </Button>
        </div>
      </div>
    )
  }

  const openUserModal = () => {
    showModal(<UserForm />, {
      title: '用户信息',
      width: 800
    })
  }

  const handleAdd = () => {
    openUserModal()
  }

  const refresh = () => {
    actionRef.current?.reload()
  }

  return (
    <div className="h-full">
      <ProTable
        className="ant-pro-table-scroll"
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
        scroll={{ x: 1000, y: '100%' }}
        rowKey="path"
        search={{
          labelWidth: 'auto'
        }}
        // 默认情况下，会显示 刷新、密度调整、列设置 等基础功能按钮
        // 开发者可通过 options 自定义这些按钮的显隐或扩展功能
        options={{
          fullScreen: true // 会影响表格滚动
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
    </div>
  )
}

export default JsonTable
