import { useSearchParams } from 'react-router-dom'
import { Card } from 'antd'

const Menu1: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const name = searchParams.get('name')
  const xxx = searchParams.get('xxx') // null

  return (
    <Card>
      <span className="text">我是 Menu 1 页面</span>
    </Card>
  )
}

export default Menu1
