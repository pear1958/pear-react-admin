import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import useAuthButton from '@/hooks/useAuthButton'

const Home = () => {
  const navigate = useNavigate()
  const { BUTTONS } = useAuthButton()

  const url = '/components/jsonForm'

  const handleClick = () => {
    navigate(url)
  }

  const handleClick2 = () => {
    window.$navigate(url)
  }

  const data = Array(120)
    .fill('')
    .map(_ => Math.random())

  return (
    <div className="page-box">
      <div>
        {BUTTONS.test1 && (
          <Button onClick={handleClick} type="primary">
            测试
          </Button>
        )}
        <Button onClick={handleClick2} type="primary" className="ml-3">
          测试2
        </Button>
      </div>

      <div className="mt-3">
        {data.map(_ => (
          <div key={_}>{_}</div>
        ))}
      </div>
    </div>
  )
}

export default Home
