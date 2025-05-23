import { useLocation } from 'react-router-dom'
import { LOGIN_URL } from '@/config/constant'
import NProgress from '@/config/nprogress'
import { getToken } from '@/utils/auth'

const ProgressStart = () => {
  const { pathname } = useLocation()
  const token = getToken()
  const isLogin = pathname === LOGIN_URL

  // 只有以下两种情况会走到此组件

  // 1.没有token进入系统, 不需要显示progress
  if (!isLogin && !token) {
    return <></>
  }

  // 2.不是登录页, 有token
  NProgress.start()
  return <></>
}

export default ProgressStart
