import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { produce } from 'immer'
import { useImmer } from 'use-immer'

const Home = () => {
  const [obj, setObj] = useState({
    name: 'zhangsan',
    nest: {
      aaa: {
        bbb: [21],
        ccc: 278
      }
    }
  })

  const [data, setData] = useImmer<Recordable>({
    name: 'lisi',
    nest: {
      xxx: {
        yyy: [77],
        zzz: 629
      }
    }
  })

  useEffect(() => {
    console.log('修改了obj', obj)
  }, [obj])

  useEffect(() => {
    console.log('修改了data', data)
  }, [data])

  const handleClick = () => {
    setObj(
      produce(obj, draft => {
        draft.nest.aaa.ccc = 333
      })
    )
    setData(draft => {
      draft.nest.xxx.zzz = 'oooppppp'
    })
  }

  return (
    <div>
      <Button onClick={handleClick} type="primary">
        测试
      </Button>
    </div>
  )
}

export default Home
