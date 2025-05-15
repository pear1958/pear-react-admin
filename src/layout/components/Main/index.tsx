import { createRef, useContext } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { useAuthStore } from '@/store'
import { RefreshContext } from '@/context/refresh'
import './index.less'

const Main = () => {
  const outlet = useOutlet()
  const { pathname } = useLocation()
  const { mainShow } = useContext(RefreshContext)
  const flatMenuList = useAuthStore(state => state.flatMenuList)

  const menuList = flatMenuList.map(item => ({
    ...item,
    nodeRef: createRef()
  })) as Recordable[]

  // 解决导致useEffect多次执行的过渡动画
  // @see: http://reactcommunity.org/react-transition-group/with-react-router
  const { nodeRef } = menuList.find((route: MenuItem) => route.path === pathname) ?? {}

  return (
    <div className="pear-main">
      <SwitchTransition>
        <CSSTransition
          classNames="fade"
          key={pathname}
          nodeRef={nodeRef}
          timeout={300}
          exit={false}
          unmountOnExit
        >
          <div ref={nodeRef} className="outlet-box">
            {mainShow && outlet}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default Main
