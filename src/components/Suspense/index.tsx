import React, { Suspense } from 'react'
import { PageLoading } from '../Loading'

const SuspenseCompo = (Component: React.LazyExoticComponent<React.ComponentType>) => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Component />
    </Suspense>
  )
}

export default SuspenseCompo
