import React, { Suspense, useEffect } from 'react'
import { Loading } from '../Loading'
import NProgress from '@/config/nprogress'

const Lazy = (Component: React.LazyExoticComponent<React.ComponentType>) => {
  useEffect(() => {
    NProgress.start()
    return () => NProgress.done()
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}

export default Lazy
