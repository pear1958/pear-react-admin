import { Spin } from 'antd'
import './index.less'
import { useEffect } from 'react'
import NProgress from '@/config/nprogress'

export const Loading = () => (
  <div className="loading-box">
    <Spin size="large" />
  </div>
)

export const PageLoading = () => {
  useEffect(() => {
    NProgress.start()
    return () => NProgress.done()
  }, [])

  return <Loading />
}
