import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/constant'
import { useUserStore } from '@/store'

const Login = () => {
  const navigate = useNavigate()
  const setToken = useUserStore(state => state.setToken)

  const handleLogin = () => {
    console.log('点击登录')
    setToken('dpoawjdmvfmdawld')
    navigate(HOME_URL)
  }

  return <div onClick={handleLogin}>Login</div>
}

export default Login
