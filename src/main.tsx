import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@ant-design/v5-patch-for-react-19'

import '@/styles/index.less'

// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/styles/index.scss整体css文件导致热更新慢的问题
import '@/styles/tailwind.css'

import { isDev } from './utils/index.ts'
import { startMock } from './mock/index.ts'

import 'virtual:svg-icons-register'

createRoot(document.getElementById('root')!).render(<App />)

if (isDev) startMock()
