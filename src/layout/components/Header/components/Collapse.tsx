import { createElement, memo } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { useSystemStore } from '@/store'

const Collapse = ({ className }) => {
  const { isCollapse, setCollapse } = useSystemStore(state => ({
    isCollapse: state.sideBar.isCollapse,
    setCollapse: state.setCollapse
  }))

  return createElement(isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
    className: classNames('primary', className),
    onClick: () => {
      setCollapse(!isCollapse)
    }
  })
}

export default memo(Collapse)
