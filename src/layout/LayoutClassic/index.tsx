import { useOutlet } from 'react-router-dom'
import Header from '../components/Header'
import './index.less'

const LayoutClassic = () => {
  const outlet = useOutlet()
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <div className="flex">
        {/* <Menu /> */}
        <div className="text-[#E53D30] menu">111</div>
        <div className="flex-1">{outlet}</div>
      </div>
    </div>
  )
}

export default LayoutClassic
