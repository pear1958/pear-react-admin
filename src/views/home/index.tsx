import { useLocation, useMatch, useMatches, useNavigate } from 'react-router-dom'
import { Button, Input } from 'antd'
import useAuthButton from '@/hooks/useAuthButton'

const Home = () => {
  const navigate = useNavigate()
  const { BUTTONS } = useAuthButton()

  const match = useMatches()
  const location = useLocation()

  // console.log('match', match)
  // console.log('location', location)

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
    <div className="pear-box">
      <div>
        <Button onClick={handleClick} type="primary">
          测试1
        </Button>
        <Button onClick={handleClick2} type="primary" className="ml-3">
          测试2
        </Button>
      </div>

      <div className="mt-3 w-[300px]">
        <Input placeholder="请输入" />
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
