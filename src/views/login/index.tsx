import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { HOME_URL } from '@/config/constant'
import useAuth from '@/hooks/useAuth'
import { setToken } from '@/utils/auth'
import { login } from '@/api/modules/user'
import './index.less'

const Login = () => {
  const navigate = useNavigate()
  const { initAuth } = useAuth()

  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      const params = { username: 'Admin', password: '123456', code: 'phfp' }
      await login(params)
      setToken(`${Math.random()}`)
      await initAuth()
      navigate(HOME_URL)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-btn">
      <Button type="primary" onClick={handleLogin} loading={loading}>
        登录
      </Button>
    </div>
  )
}

export default Login
