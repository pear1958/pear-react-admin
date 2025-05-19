import { FC, memo, useEffect, useImperativeHandle, useRef } from 'react'
import * as echarts from 'echarts'
import { EChartsType } from 'echarts'
import { useThrottleFn } from 'ahooks'
import type { ChartProps } from './type'
import { useSystemStore } from '@/store'

const Echarts: FC<ChartProps> = ({ ref = null, options = {}, renderer = 'canvas' }) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chart = useRef<EChartsType>(null) // chartInstance
  const { mainMaximize, isCollapse } = useSystemStore(state => ({
    mainMaximize: state.mainMaximize,
    isCollapse: state.sideBar.isCollapse
  }))

  const updateChart = () => {
    if (!chart.current) return
    chart.current.clear()
    chart.current.setOption(options)
  }

  const { run: resizeChart } = useThrottleFn(
    () => {
      chart.current?.resize()
    },
    { wait: 200, leading: false }
  )

  window.addEventListener('resize', resizeChart)

  useEffect(() => {
    updateChart()
  }, [options])

  useEffect(() => {
    resizeChart()
  }, [mainMaximize, isCollapse])

  useEffect(() => {
    chart.current = echarts.init(chartRef.current, null, { renderer })
    chart.current.setOption(options)
    return () => window.removeEventListener('resize', resizeChart)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      getInstance: () => chart.current,
      chartRef: chartRef.current
    }),
    []
  )

  return <div ref={chartRef} className="chart w-full h-full" />
}

export default memo(Echarts)
