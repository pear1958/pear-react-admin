import { useOutlet } from 'react-router-dom'

const LayoutClassic = () => {
  const outlet = useOutlet()

  return <div style={{ height: '100vh' }}>{outlet}</div>
}

export default LayoutClassic
