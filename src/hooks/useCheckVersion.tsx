import { useEffect, useRef } from 'react'
import { Button, Space } from 'antd'
import { notification } from './useMessage'
import { isDev } from '@/utils'

const useCheckVersion = () => {
  const key = `${Date.now()}`
  const detected = useRef<boolean>(false)

  const showNotice = () => {
    notification.open({
      key,
      message: '检测到新版本',
      description: '是否更新？',
      duration: 0,
      actions: (
        <Space>
          <Button size="small" onClick={() => notification.destroy(key)}>
            忽略
          </Button>
          <Button type="primary" size="small" onClick={() => location.reload()}>
            刷新
          </Button>
        </Space>
      ),
      onClose: () => {
        detected.current = false
      }
    })
  }

  useEffect(() => {
    document.body.addEventListener('plugin_web_update_notice', e => {
      console.log('监听到更新', e.detail)
      // 避免同一时间显示多个notification
      if (detected.current) return
      detected.current = true
      showNotice()
    })

    // 本地运行 获取不到 window.pluginWebUpdateNotice_，部署到线上可以获取
    if (!isDev) {
      window.pluginWebUpdateNotice_.checkUpdate()
    }
  }, [])
}

export default useCheckVersion
