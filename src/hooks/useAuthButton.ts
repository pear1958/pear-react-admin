import { useAuthStore } from '@/store'
import useStableRoute from './useStableRoute'

interface Result {
  BUTTONS: { [key: string]: boolean }
}

const useAuthButton = (): Result => {
  const BUTTONS = {}
  const buttonData = useAuthStore(state => state.buttonData)
  const { matches } = useStableRoute()
  const match = matches[matches.length - 1]
  const routeName = (match.data as Recordable)?.name

  if (!routeName) return

  const pageAuthList = buttonData[routeName] || []

  pageAuthList.forEach(authName => {
    BUTTONS[authName] = true
  })

  console.log('BUTTONS', BUTTONS)

  return {
    BUTTONS
  }
}

export default useAuthButton
