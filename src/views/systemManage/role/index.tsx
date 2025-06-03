import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { selectOnlineUsers, selectUserById } from '@/redux/modules/device'

const RoleManage = () => {
  const onlineUsers = useSelector(selectOnlineUsers)
  console.log('onlineUsers', onlineUsers)

  const people = useSelector(state => selectUserById(state, 'x111'))
  console.log('people', people)

  return (
    <div>
      <Button type="link">查看</Button>
      <Button type="text">测试</Button>
    </div>
  )
}

export default RoleManage
