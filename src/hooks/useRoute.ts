import { useMatches } from 'react-router-dom'

const useRoute = () => {
  const matches = useMatches()
  const match = matches[matches.length - 1] as Recordable

  return {
    routeName: match.data?.name
  }
}

export default useRoute
