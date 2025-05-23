import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import NoExistImg from '@/assets/imgs/404.svg?react'
import { useTabsStore } from '@/store'
import { ERROR_404_URL } from '@/config/constant'

const Error404 = () => {
  const navigate = useNavigate()
  const { removeTab } = useTabsStore()

  const handleBack = () => {
    removeTab(ERROR_404_URL, true)
    navigate(-2)
  }

  return (
    <div className="h-full flex-c">
      <NoExistImg />
      <div className="flex flex-col ml-[120px] text-base-color">
        <h2 className="text-[26px]">404</h2>
        <h4 className="mt-[25px] mb-5">抱歉, 你访问的页面不存在。</h4>
        <Button type="primary" onClick={handleBack}>
          返回
        </Button>
      </div>
    </div>
  )
}

export default Error404
