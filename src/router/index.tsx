import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import useMessage from '@/hooks/useMessage'

const Router: React.FC = () => {
  useMessage()

  const [routes, setRoutes] = useState([])
  return <RouterProvider />
}

export default Router
