import { useNavigate } from 'react-router-dom'

const RouterGuard = ({ children }) => {
  const navigate = useNavigate()
  window.$navigate = navigate
  return children
}

export default RouterGuard
