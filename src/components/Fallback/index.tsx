import { Button, Space } from 'antd'
import type { FallbackProps } from 'react-error-boundary'
import { isDev } from '@/utils'

// 手动显示错误边界:
// const { showBoundary } = useErrorBoundary()

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Space direction="vertical">
      <div> {isDev ? error?.message : '出错了，请稍后再试'} </div>
      <Button type="primary" onClick={resetErrorBoundary}>
        重试
      </Button>
    </Space>
  )
}

export default Fallback
