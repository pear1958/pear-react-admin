import { useNavigate } from 'react-router-dom'
import { useAuthStore, useUserStore } from '@/store'
import { LOGIN_URL } from '@/config/constant'

const useAuth = (callback: Function) => {
  // const navigate = useNavigate()
  const getMenuList = useAuthStore(state => state.getMenuList)
  const getButtonData = useAuthStore(state => state.getButtonData)
  const getUserInfo = useUserStore(state => state.getUserInfo)
  const setToken = useUserStore(state => state.setToken)

  const handleError = () => {
    setToken(null)
    console.log('handleError')
    // navigate(LOGIN_URL, { replace: true })
  }

  const initAuth = () => {
    Promise.all([getMenuList(), getButtonData(), getUserInfo()])
      .then(([res1, res2, res3]) => {
        if (res1 && res2 && res3) callback && callback()
        else handleError()
      })
      .catch(err => {
        console.log('err', err)
        handleError()
      })
  }

  return { initAuth }
}

export default useAuth
