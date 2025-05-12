import { useOutlet } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import './index.less'

const LayoutClassic = () => {
  const outlet = useOutlet()
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <div className="classic">
        <Menu />
        <div className="flex-1 p-4">{outlet}</div>
      </div>
    </div>
  )
}

export default LayoutClassic
