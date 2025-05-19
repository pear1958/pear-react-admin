import { createElement } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useSystemStore } from '@/store'
import classNames from 'classnames'

const Collapse = ({ className }) => {
  const { isCollapse, setCollapse } = useSystemStore(state => ({
    isCollapse: state.sideBar.isCollapse,
    setCollapse: state.setCollapse
  }))

  const style = {
    cursor: 'pointer',
    transition: 'color 0.3s'
  }

  return createElement(isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
    className: classNames(className),
    style,
    onClick: () => {
      setCollapse(!isCollapse)
    }
  })
}

export default Collapse
