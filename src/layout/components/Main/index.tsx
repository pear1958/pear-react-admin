import { useContext, useEffect, useMemo } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import KeepAlive, { useKeepAliveRef } from 'keepalive-for-react'
import { RefreshContext } from '@/context/refresh'
import './index.less'

const Main = () => {
  const outlet = useOutlet()
  const { pathname, search } = useLocation()
  const { mainShow } = useContext(RefreshContext)
  const keepAliveRef = useKeepAliveRef()

  // 确定哪个路由组件处于活动状态
  const currentKey = useMemo(() => pathname + search, [pathname, search])

  const cacheKeys = ['/home', '/components/jsonForm']

  // console.log('currentKey', currentKey)
  // useEffect(() => {
  //   console.log('keepAliveRef', keepAliveRef.current.getCacheNodes())
  // })

  return (
    <KeepAlive
      transition
      aliveRef={keepAliveRef}
      activeCacheKey={currentKey}
      include={cacheKeys}
      containerClassName="pear-keep-alive"
      cacheNodeClassName="pear-cache"
    >
      <div className="pear-main">{mainShow && outlet}</div>
    </KeepAlive>
  )
}

export default Main
