import { useEffect, useRef } from 'react'
import { useLocation, useMatches, useParams } from 'react-router-dom'

// 自定义 Hook：安全获取路由信息
const useStableRoute = () => {
  const location = useLocation()
  const matches = useMatches()
  const params = useParams()

  const routeRef = useRef({
    location: { ...location },
    matches: [...matches],
    params: { ...params }
  })

  // 只有在路径变化时才更新 ref
  useEffect(() => {
    routeRef.current = {
      location: { ...location },
      matches: [...matches],
      params: { ...params }
    }
  }, [location]) // 只依赖路径变化

  return routeRef.current
}

export default useStableRoute
