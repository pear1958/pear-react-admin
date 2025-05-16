import { useImperativeHandle } from 'react'

const Echarts = ({ ref = null }) => {
  useImperativeHandle(
    ref,
    () => ({
      getInstance: () => '给你instance'
    }),
    []
  )

  return <div>Echarts</div>
}

export default Echarts
