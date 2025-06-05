import { useContext, useEffect, useMemo } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import KeepAlive, { useKeepAliveRef } from 'keepalive-for-react'
import { ErrorBoundary } from 'react-error-boundary'
import { RefreshContext } from '@/context/refresh'
import { useSystemStore, useTabsStore } from '@/store'
import MemoScroll from './MemoScroll'
import Fallback from '@/components/Fallback'
import './index.less'

const Main = () => {
  const outlet = useOutlet()
  const { pathname, search } = useLocation()
  const { mainShow } = useContext(RefreshContext)
  const keepAliveRef = useKeepAliveRef()
  const keepAliveList = useTabsStore(state => state.keepAliveList)
  const isDark = useSystemStore(state => state.isDark)

  // 确定哪个路由组件处于激活状态
  const activeKey = useMemo(() => pathname + search, [pathname, search])

  useEffect(() => {
    // 路由切换背景色
    const dom = document.getElementsByClassName('pear-keep-alive')[0] as HTMLDivElement
    if (dom) dom.style.backgroundColor = 'var(--pear-main-bg)'
  }, [isDark])

  return (
    <KeepAlive
      transition
      aliveRef={keepAliveRef}
      activeCacheKey={activeKey}
      include={keepAliveList}
      containerClassName="pear-keep-alive"
      cacheNodeClassName="pear-cache"
    >
      <MemoScroll className="pear-main">
        <ErrorBoundary FallbackComponent={Fallback}>{mainShow && outlet}</ErrorBoundary>
      </MemoScroll>
    </KeepAlive>
  )
}

export default Main
