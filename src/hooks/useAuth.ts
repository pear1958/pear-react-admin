import { useAuthStore, useUserStore } from '@/store'
import { getButtonData, getMenuList } from '@/api/modules/user'
import { getUserInfo } from '@/api/modules/user'
import { notification } from '@/hooks/useMessage'
import { removeToken } from '@/utils/auth'
import { ROUTER_404 } from '@/config/constant'

const useAuth = () => {
  const { setMenuList, setButtonData } = useAuthStore(state => ({
    setMenuList: state.setMenuList,
    setButtonData: state.setButtonData
  }))
  const setUserInfo = useUserStore(state => state.setUserInfo)

  const initAuth = () =>
    new Promise((resolve, reject) => {
      const handleError = () => {
        removeToken()
        reject(false)
      }
      Promise.all([getMenuList(), getButtonData(), getUserInfo()])
        .then(([{ data: menuList }, { data: buttonData }, { data: userInfo }]) => {
          if (!menuList?.length) {
            notification.warning({
              message: '无权限访问',
              description: '当前账号无任何菜单权限，请联系系统管理员！'
            })
            handleError()
          }

          if (menuList?.length && buttonData && userInfo) {
            setButtonData(buttonData)
            setUserInfo(userInfo)
            menuList.push(ROUTER_404)
            setMenuList(menuList)
            resolve(true)
          } else {
            handleError()
          }
        })
        .catch(err => {
          console.log('err', err)
          reject(false)
        })
    })

  return { initAuth }
}

export default useAuth
