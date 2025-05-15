import { useEffect } from 'react'
import { Spin } from 'antd'
import NProgress from '@/config/nprogress'
import './index.less'

export const Loading = ({ nprogress = false }) => {
  nprogress && NProgress.start()
  return (
    <div className="loading-box">
      <Spin size="large" />
    </div>
  )
}

export const PageLoading = () => {
  useEffect(() => {
    if (document.getElementById('nprogress')) {
      NProgress.done()
      return
    }
    NProgress.start()
    return () => NProgress.done()
  }, [])

  return <Loading />
}
