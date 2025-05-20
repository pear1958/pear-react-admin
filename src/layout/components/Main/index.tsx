import { useContext, useMemo } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import KeepAlive, { useKeepAliveRef } from 'keepalive-for-react'
import { RefreshContext } from '@/context/refresh'
import { useTabsStore } from '@/store'
import './index.less'

const Main = () => {
  const outlet = useOutlet()
  const { pathname, search } = useLocation()
  const { mainShow } = useContext(RefreshContext)
  const keepAliveRef = useKeepAliveRef()
  const keepAliveList = useTabsStore(state => state.keepAliveList)

  // 确定哪个路由组件处于激活状态
  const activeKey = useMemo(() => pathname + search, [pathname, search])

  return (
    <KeepAlive
      transition
      aliveRef={keepAliveRef}
      activeCacheKey={activeKey}
      include={keepAliveList}
      containerClassName="pear-keep-alive"
      cacheNodeClassName="pear-cache"
    >
      <div className="pear-main">{mainShow && outlet}</div>
    </KeepAlive>
  )
}

export default Main
