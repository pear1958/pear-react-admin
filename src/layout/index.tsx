import { Watermark } from 'antd'
import { useSystemStore } from '@/store'
import LayoutClassic from './LayoutClassic'

const Layout: React.FC = () => {
  const watermark = useSystemStore(state => state.watermark)

  return (
    <Watermark zIndex={1001} content={watermark ? ['Pear Admin', '18270993095'] : []}>
      <LayoutClassic />
    </Watermark>
  )
}

export default Layout
