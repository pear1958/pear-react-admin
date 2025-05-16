import { useEffect, useRef } from 'react'
import Echarts from '@/components/Echarts'

const EchartsBase = () => {
  const echartsRef = useRef(null)

  useEffect(() => {
    // console.log('echartsRef', echartsRef.current.getInstance())
    console.log('echartsRef2', echartsRef)
  }, [])

  return (
    <div>
      <Echarts ref={echartsRef} />
    </div>
  )
}

export default EchartsBase
