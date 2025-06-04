import { useModal } from '@/context/modal'
import { Button, Form, Radio, Space } from 'antd'

const EditForm = () => {
  const [form] = Form.useForm()
  const { closeModal } = useModal()

  const menuOptions = [
    { value: 1, label: '目录' },
    { value: 2, label: '菜单' },
    { value: 3, label: '按钮' }
  ]

  const onFinish = (values: any) => {
    console.log(values)
  }

  return (
    <div className="p-4">
      <Form form={form} onFinish={onFinish} initialValues={{ type: 2 }}>
        <Form.Item label="菜单类型" name="type">
          <Radio.Group options={menuOptions} />
        </Form.Item>

        <div className="flex-c gap-4">
          <Button htmlType="button" onClick={closeModal}>
            取消
          </Button>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default EditForm
