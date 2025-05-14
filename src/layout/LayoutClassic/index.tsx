import Header from '../components/Header'
import Menu from '../components/Menu'
import Tabs from '../components/Tabs'
import Main from '../components/Main'
import './index.less'

const LayoutClassic = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <div className="classic-body">
        <Menu />
        <div className="tabs-main">
          <Tabs />
          <Main />
        </div>
      </div>
    </div>
  )
}

export default LayoutClassic
