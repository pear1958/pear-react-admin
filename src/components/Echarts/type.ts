import { RefObject } from 'react'
import * as echarts from 'echarts'
import { EChartsOption, EChartsType } from 'echarts'

export type GeoJson = Parameters<typeof echarts.registerMap>[1]

type RendererType = 'canvas' | 'svg'

export interface ChartProps {
  options?: EChartsOption
  ref?: RefObject<{
    getInstance: () => EChartsType
    chartRef: HTMLDivElement
  }>
  renderer?: RendererType
}
