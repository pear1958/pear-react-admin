import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const Home = () => {
  const navigate = useNavigate()

  const url = '/components/jsonForm'

  const handleClick = () => {
    navigate(url)
  }

  const handleClick2 = () => {
    window.$navigate(url)
  }

  return (
    <div>
      <Button onClick={handleClick} type="primary">
        测试
      </Button>
      <Button onClick={handleClick2} type="primary">
        测试2
      </Button>
    </div>
  )
}

export default Home
