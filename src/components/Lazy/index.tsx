import React, { Suspense } from 'react'
import { PageLoading } from '../Loading'

const Lazy = (Component: React.LazyExoticComponent<React.ComponentType>) => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Component />
    </Suspense>
  )
}

export default Lazy
