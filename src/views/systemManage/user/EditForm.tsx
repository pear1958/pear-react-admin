import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Radio, Select, Space } from 'antd'
import { getRoleList } from '@/api/modules/systemManage'
import { LabelValue } from 'pear-common-utils/es/types/global'

const EditForm: React.FC = () => {
  const [form] = Form.useForm()
  const [roleList, setRoleList] = useState([])

  const onFinish = (values: any) => {
    console.log('values', values)
  }

  const onReset = () => {
    form.resetFields()
  }

  useEffect(() => {
    getRoleOptions()
  }, [])

  const getRoleOptions = async () => {
    const { data } = await getRoleList()
    const list = (data.items || []).map((_: LabelValue) => ({
      label: _.name,
      value: _.id
    }))
    setRoleList(list)
  }

  return (
    <div className="pt-4">
      <Form
        name="userForm"
        form={form}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 21 }}
        initialValues={{ status: 1 }}
      >
        <Form.Item label="所属角色" name="roleIds">
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
            <Radio value={1}>启用</Radio>
            <Radio value={0}>禁用</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ marginBottom: '12px' }}>
          <Space>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditForm
