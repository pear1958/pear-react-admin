import { useEffect, useMemo, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function MemoScroll({ children, className }) {
  const domRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const scrollHistoryMap = useRef<Map<string, number>>(new Map())

  const activeKey = useMemo(() => {
    return location.pathname + location.search
  }, [location.pathname, location.search])

  useEffect(() => {
    const divDom = domRef.current
    if (!divDom) return

    setTimeout(() => {
      divDom.scrollTo(0, scrollHistoryMap.current.get(activeKey) || 0)
    }, 200)

    const onScroll = (e: Event) => {
      const target = e.target as HTMLDivElement
      if (!target) return
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
