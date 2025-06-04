import { useImperativeHandle, useState } from 'react'
import { Button, Form, Input, Modal, Radio } from 'antd'
import { delay } from 'pear-common-utils'
import { message } from '@/hooks/useMessage'

const menuOptions = [
  { value: 1, label: '目录' },
  { value: 2, label: '菜单' },
  { value: 3, label: '按钮' }
]

const EditForm = ({ ref, onRefresh }) => {
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useImperativeHandle(
    ref,
    () => ({
      openModal: () => {
        setOpen(true)
      }
    }),
    []
  )

  const closeModal = () => {
    setOpen(false)
  }

  const submit = async () => {
    try {
      await form.validateFields()
      setLoading(true)
      await delay(2000)
      closeModal()
      message.success('新增成功')
      onRefresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      open={open}
      destroyOnHidden
      width={800}
      title="新增菜单"
      onCancel={closeModal}
      footer={
        <div className="flex-c gap-4">
          <Button onClick={closeModal}>取消</Button>
          <Button type="primary" onClick={submit} loading={loading}>
            确定
          </Button>
        </div>
      }
    >
      <div className="pt-4">
        <Form form={form} initialValues={{ type: 2 }} preserve={false}>
          <Form.Item label="菜单类型" name="type">
            <Radio.Group options={menuOptions} />
          </Form.Item>
          <Form.Item
            label="菜单名称"
            name="menuName"
            rules={[{ required: true, message: '请输入菜单名称' }]}
          >
            <Input placeholder="请输入菜单名称" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}

export default EditForm
