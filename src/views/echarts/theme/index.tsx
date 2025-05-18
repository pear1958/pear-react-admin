import { useState } from 'react'
import * as echarts from 'echarts'
import Echarts from '@/components/Echarts'
import { chartOptions } from './config'
import themeConfig from './wonderland.json'

const EchartsTheme = () => {
  const [options] = useState(chartOptions)

  echarts.registerTheme('wonderland', themeConfig)

  return (
    <div className="page-box h-full">
      <Echarts options={options} />
    </div>
  )
}

export default EchartsTheme
