import { useAuthStore } from '@/store'
import useRoute from './useRoute'

interface Result {
  BUTTONS: { [key: string]: boolean }
}

const useAuthButton = (): Result => {
  const BUTTONS = {}
  const buttonData = useAuthStore(state => state.buttonData)
  // const { routeName } = useRoute()
  const routeName = ''

  // routeName需要手动获取, 避免keep-alive切换路由时, 原组件重渲染

  // console.log('重新执行')

  if (routeName) {
    const pageAuthList = buttonData[routeName] || []
    pageAuthList.forEach(authName => (BUTTONS[authName] = true))
  }

  // console.log('BUTTONS', BUTTONS)

  return {
    BUTTONS
  }
}

export default useAuthButton
