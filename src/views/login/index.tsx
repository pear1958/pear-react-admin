import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Flex, Form, Input, Spin } from 'antd'
import {
  LoadingOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  UserOutlined
} from '@ant-design/icons'
import { HOME_URL } from '@/config/constant'
import useAuth from '@/hooks/useAuth'
import {
  getLoginInfo,
  getRemember,
  removeLoginInfo,
  removeRemember,
  setLoginInfo,
  setRemember
} from '@/utils/auth'
import { getLoginCode } from '@/api/modules/auth'
import { message } from '@/hooks/useMessage'
import { title } from '@/utils'
import { useUserStore } from '@/store'
import './index.less'

const Login = () => {
  const navigate = useNavigate()
  const { initAuth } = useAuth()
  const { login } = useUserStore()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState({
    id: '',
    url: ''
  })

  useEffect(() => {
    fillInfo()
    getCaptcha()
  }, [])

  const fillInfo = () => {
    const remember = getRemember()
    if (!remember) return
    form.setFieldValue('remember', true)

    const jsonData = getLoginInfo()
    if (!jsonData) return

    const { username, password } = JSON.parse(jsonData)
    form.setFieldsValue({
      username,
      password
    })
  }

  const getCaptcha = async () => {
    const { data } = await getLoginCode({ width: 100, height: 38 })
    setCaptcha({
      id: data.id,
      url: data.img
    })
  }

  const handleLogin = async (values: Recordable) => {
    try {
      setLoading(true)
      const params = { ...values, captchaId: captcha.id } as Recordable
      delete params.remember

      await login(params)
      await initAuth()

      if (values.remember) {
        setRemember(true)
        setLoginInfo({
          username: values.username || '',
          password: values.password || ''
        })
      } else {
        removeRemember()
        removeLoginInfo()
      }

      navigate(HOME_URL)
    } finally {
      setLoading(false)
    }
  }

  const forget = () => {
    message.info('请联系管理员')
  }

  return (
    <div className="login">
      <div className="login-form">
        <h2 className="title">{title}</h2>

        <Form
          name="login"
          form={form}
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={handleLogin}
        >
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input prefix={<UserOutlined />} placeholder="请输入用户名" size="large" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" size="large" />
          </Form.Item>

          <Form.Item name="verifyCode">
            <div className="w-full flex-c gap-3">
              <div className="flex-1">
                <Input prefix={<SafetyCertificateOutlined />} placeholder="验证码" size="large" />
              </div>

              <div onClick={getCaptcha} className="code-img">
                {!captcha.url ? (
                  <Spin indicator={<LoadingOutlined spin />} size="small" />
                ) : (
                  <img src={captcha.url} className="size-full" />
                )}
              </div>
            </div>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Flex justify="space-between" align="center">
              <Checkbox>记住我</Checkbox>
              <Button type="link" onClick={forget}>
                忘记密码?
              </Button>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" size="large" htmlType="submit" loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="copyright-wrap">
        <p className="en">copyright@2025 {title} All Rights Reserved</p>
        <p className="cn">{title} 版权所有</p>
      </div>
    </div>
  )
}

export default Login
