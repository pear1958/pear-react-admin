import { FC, memo, useEffect } from 'react'
import { Spin } from 'antd'
import NProgress from '@/config/nprogress'
import './index.less'

export const Loading: FC<{ nprogress?: boolean }> = memo(({ nprogress = false }) => {
  nprogress && NProgress.start()
  return (
    <div className="loading-box">
      <Spin size="large" />
    </div>
  )
})

export const PageLoading = memo(() => {
  useEffect(() => {
    NProgress.start()
    return () => NProgress.done()
  }, [])

  return <Loading />
})
