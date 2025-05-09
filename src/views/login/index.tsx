import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/constant'
import { useUserStore } from '@/store'
import './index.less'
import { Button } from 'antd'

const Login = () => {
  const navigate = useNavigate()
  const setToken = useUserStore(state => state.setToken)

  const handleLogin = () => {
    console.log('点击登录')
    setToken('dpoawjdmvfmdawld')
    navigate(HOME_URL)
  }

  return (
    <div className="login-btn" >
      <Button type="primary" onClick={handleLogin}>登录</Button>
    </div>
  )
}

export default Login
