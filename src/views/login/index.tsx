import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { HOME_URL } from '@/config/constant'
import useAuth from '@/hooks/useAuth'
import { setToken } from '@/utils/auth'
import './index.less'

const Login = () => {
  const navigate = useNavigate()
  const { initAuth } = useAuth()

  const handleLogin = async () => {
    setToken(`${Math.random()}`)
    await initAuth()
    navigate(HOME_URL)
  }

  return (
    <div className="login-btn">
      <Button type="primary" onClick={handleLogin}>
        登录
      </Button>
    </div>
  )
}

export default Login
