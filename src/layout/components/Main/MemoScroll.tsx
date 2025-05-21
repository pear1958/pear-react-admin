import { useEffect, useMemo, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// 当切换路径时, 记住页面的滚动位置
const MemoScroll = ({ children, className }) => {
  const { pathname, search } = useLocation()

  const domRef = useRef<HTMLDivElement>(null)
  const scrollHistoryMap = useRef<Map<string, number>>(new Map())
  const activeKey = useMemo(() => pathname + search, [pathname, search])

  useEffect(() => {
    const divDom = domRef.current
    if (!divDom) return

    // 200毫秒等待动画过渡效果结束
    setTimeout(() => {
      divDom.scrollTo(0, scrollHistoryMap.current.get(activeKey) || 0)
    }, 200)

    const onScroll = (e: Event) => {
      const target = e.target as HTMLDivElement
      if (!target) return
      // 记录滚动位置
      scrollHistoryMap.current.set(activeKey, target?.scrollTop || 0)
    }

    divDom?.addEventListener('scroll', onScroll, {
      passive: true
    })

    return () => {
      divDom?.removeEventListener('scroll', onScroll)
    }
  }, [activeKey])

  return (
    <div className={className} ref={domRef}>
      {children}
    </div>
  )
}

export default MemoScroll
