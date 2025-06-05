import { Button, Space, Typography } from 'antd'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'
import { isDev } from '@/utils'

// 用法示例:
// <ErrorBoundary FallbackComponent={Fallback}>
// </ErrorBoundary>

const { Text, Title } = Typography

const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Space direction="vertical">
      {isDev ? <Text code>{error.message}</Text> : <Title level={4}>出错了，请稍后再试</Title>}
      <Button type="primary" onClick={resetErrorBoundary}>
        重试
      </Button>
    </Space>
  )
}

export default Fallback
