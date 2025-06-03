import { Button } from 'antd'
import { useDispatch, useSelector } from '@/redux'
import { fetchDevice, selectOnlineUsers, selectUserById } from '@/redux/modules/device'

const RoleManage = () => {
  const onlineUsers = useSelector(selectOnlineUsers)
  // console.log('onlineUsers', onlineUsers)

  const people = useSelector(state => selectUserById(state, 'x111'))
  // console.log('people', people)

  const dispatch = useDispatch()

  dispatch(fetchDevice('dojwapd'))

  return (
    <div>
      <Button type="link">查看</Button>
      <Button type="text">测试</Button>
    </div>
  )
}

export default RoleManage
