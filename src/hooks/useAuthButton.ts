import { useAuthStore } from '@/store'
import { getMenuByPath } from '@/utils'

interface Result {
  BUTTONS: { [key: string]: boolean }
}

const useAuthButton = (): Result => {
  const BUTTONS = {}
  const buttonData = useAuthStore(state => state.buttonData)

  // routeName需要手动获取, 避免keep-alive切换路由时, 原组件重渲染
  const meta = getMenuByPath()?.meta ?? {}
  const routeName = meta.name

  if (routeName) {
    const pageAuthList = buttonData[routeName] || []
    pageAuthList.forEach(authName => (BUTTONS[authName] = true))
  }

  return {
    BUTTONS
  }
}

export default useAuthButton
