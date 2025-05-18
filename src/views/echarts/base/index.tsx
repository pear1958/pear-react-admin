import { useEffect, useRef } from 'react'
import { useImmer } from 'use-immer'
import { useTimeout } from 'ahooks'
import Echarts from '@/components/Echarts'
import { chartOptions } from './config'
import { message } from '@/hooks/useMessage'

const EchartsBase = () => {
  const echartsRef = useRef(null)
  const [options, setOptions] = useImmer(chartOptions)

  useEffect(() => {
    // console.log('echartsRef', echartsRef.current.getInstance())
    // console.log('echartsRef', echartsRef)
  }, [])

  useTimeout(() => {
    message.info('更新颜色')
    setOptions(draft => {
      draft.series[0].itemStyle.color = '#fa4b3e'
    })
  }, 1500)

  return (
    <div className="page-box">
      <div className="w-full h-[500px]">
        <Echarts ref={echartsRef} options={options} />
      </div>
    </div>
  )
}

export default EchartsBase
