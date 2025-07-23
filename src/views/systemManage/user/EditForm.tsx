import { FC, useEffect, useState } from 'react'
import { Button, Form, Input, Radio, Select, Space, TreeSelect } from 'antd'
import { delay } from 'pear-common-utils'
import { LabelValue } from 'pear-common-utils/es/types/global'
import { createUser, getDeptList, getRoleList } from '@/api/modules/systemManage'
import UploadFile from '@/components/UploadFile'
import { convertToTree } from '@/utils'
import { UserStatus } from './useConfig'
import { message } from '@/hooks/useMessage'

interface Props {
  id?: number
  refresh: () => void
  close: () => void
}

const EditForm: FC<Props> = ({ id, refresh, close }) => {
  const [form] = Form.useForm()
  const [submitLoading, setSubmitLoading] = useState(false)
  const [roleList, setRoleList] = useState([])
  const [deptList, setDeptList] = useState([])

  const onReset = () => {
    form.resetFields()
  }

  useEffect(() => {
    getRoleOptions()
    getDeptOptions()
  }, [])

  const getRoleOptions = async () => {
    const { data } = await getRoleList()
    const list = (data?.items || []).map((_: LabelValue) => ({
      label: _.name,
      value: _.id
    }))
    setRoleList(list)
  }

  const getDeptOptions = async () => {
    const { data = [] } = await getDeptList()
    const list = convertToTree(data)
    setDeptList(list)
  }

  const submit = async () => {
    setSubmitLoading(true)
    try {
      const formState = await form.validateFields()

      console.log('表单数据：', formState)

      if (formState.avatar?.length) {
        formState.avatar = formState.avatar.join(',')
      }
      await delay(2000)
      await createUser(formState)
      setSubmitLoading(false)
      close()
      message.success("操作成功")
      refresh()
    } catch (err) {
      setSubmitLoading(false)
    }
  }

  return (
    <div className="pt-4">
      <Form
        name="userForm"
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ status: 1 }}
      >
        <Form.Item label="头像" name="avatar">
          <UploadFile />
        </Form.Item>

        <Form.Item
          label="所属部门"
          name="deptId"
          rules={[{ required: true, message: '请选择所属部门' }]}
        >
          <TreeSelect
            style={{ width: '100%' }}
            styles={{
              popup: { root: { maxHeight: 400, overflow: 'auto' } }
            }}
            placeholder="请选择所属部门"
            allowClear
            treeData={deptList}
            showSearch
            treeNodeFilterProp="title"
          />
        </Form.Item>

        <Form.Item
          label="所属角色"
          name="roleIds"
          rules={[{ required: true, message: '请选择角色' }]}
        >
          <Select mode="multiple" options={roleList} allowClear placeholder="请选择角色" />
        </Form.Item>

        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item label="昵称" name="nickname">
          <Input placeholder="请输入昵称" />
        </Form.Item>

        <Form.Item label="邮箱" name="email">
          <Input placeholder="请输入邮箱" />
        </Form.Item>

        <Form.Item label="手机" name="phone">
          <Input placeholder="请输入手机" />
        </Form.Item>

        <Form.Item label="备注" name="remark">
          <Input placeholder="请输入备注" />
        </Form.Item>

        <Form.Item label="状态" name="status">
          <Radio.Group>
            <Radio value={UserStatus.Enabled}>启用</Radio>
            <Radio value={UserStatus.Disable}>禁用</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ marginBottom: '12px' }}>
          <Space>
            <Button onClick={onReset}>重置</Button>
            <Button type="primary" onClick={submit} loading={submitLoading}>
              提交
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditForm
