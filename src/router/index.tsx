import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

const Router: React.FC = () => {
  const [routes, setRoutes] = useState([])
  return <RouterProvider />
}

export default Router
