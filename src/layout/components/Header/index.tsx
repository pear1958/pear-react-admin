import Collapse from './components/Collapse'
import Breadcrumb from './components/Breadcrumb'
import Fullscreen from './components/Fullscreen'
import DarkIcon from './components/DarkIcon'
import Setting from './components/Setting'
import './index.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="flex-c gap-5">
        <Collapse />
        <Breadcrumb />
      </div>

      <div className="flex-c gap-5">
        <Fullscreen />
        <DarkIcon />
        <Setting />
      </div>
    </div>
  )
}

export default Header
