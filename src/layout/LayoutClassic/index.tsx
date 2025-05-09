import { useOutlet } from 'react-router-dom'

const LayoutClassic = () => {
  const outlet = useOutlet()

  return <div>{outlet}</div>
}

export default LayoutClassic
