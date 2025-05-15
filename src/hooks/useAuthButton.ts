import { useAuthStore } from '@/store'

interface Result {
  BUTTONS: { [key: string]: boolean }
}

const useAuthButton = (): Result => {
  const { buttonData, routeName } = useAuthStore(state => ({
    buttonData: state.buttonData,
    routeName: state.routeName
  }))

  const pageAuthList = buttonData[routeName] || []

  const BUTTONS = {}

  pageAuthList.forEach(authName => {
    BUTTONS[authName] = true
  })

  return {
    BUTTONS
  }
}

export default useAuthButton
