import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'antd/dist/reset.css'
import '@ant-design/v5-patch-for-react-19'
import { isDev } from './utils/index.ts'
import { startMock } from './mock/index.ts'

createRoot(document.getElementById('root')!).render(<App />)

if (isDev) startMock()
