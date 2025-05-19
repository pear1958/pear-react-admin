import { Avatar, Dropdown } from 'antd'
import { ExclamationCircleOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons'
import avatarUrl from '@/assets/imgs/avatar.jpg'
import { useUserStore } from '@/store'
import { modal } from '@/hooks/useMessage'
import { logout as logoutApi } from '@/api/modules/user'
import Breadcrumb from './components/Breadcrumb'
import './index.less'
import Collapse from './components/Collapse'

const Header: React.FC = () => {
  const logout = useUserStore(state => state.logout)

  const handleLogout = () => {
    modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确认退出？',
      okText: '确认',
      cancelText: '取消',
      maskClosable: true,
      onOk: async () => {
        await logoutApi()
        logout()
      }
    })
  }

  const items = [
    {
      key: 'user-center',
      label: <span className="dropdown-item">个人中心</span>,
      icon: <UserOutlined />
    },
    {
      key: 'logout',
      label: <span className="dropdown-item">退出登录</span>,
      icon: <PoweroffOutlined />,
      onClick: handleLogout
    }
  ]

  return (
    <div className="pear-header">
      <div className="flex-c">
        <div className="title">Pear物联网管理平台</div>
        <Collapse className="collapse-icon" />
        <Breadcrumb className="ml-4" />
      </div>
      <Dropdown menu={{ items }}>
        {/* pr-[14px]  */}
        <div className="pl-[8px] cursor-pointer flex-c outline-none">
          <Avatar size={26} src={avatarUrl} />
          <span className="pl-[5px] inline-block max-w-[100px] ellipsis">Admin</span>
        </div>
      </Dropdown>
    </div>
  )
}

export default Header
