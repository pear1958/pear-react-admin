import ReactDOM from 'react-dom/client'
import { Loading } from './index'

let count = 0

export const showFullScreenLoading = () => {
  if (count === 0) {
    let dom = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    ReactDOM.createRoot(dom).render(<Loading />)
  }
  count++
}

export const hideFullScreenLoading = () => {
  if (count <= 0) return
  count--
  if (count === 0) {
    document.body.removeChild(document.getElementById('loading'))
  }
}
