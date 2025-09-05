import { createRoot } from 'react-dom/client'
import '@ant-design/v5-patch-for-react-19'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App.tsx'
import '@/styles/index.less'
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/styles/index.scss整体css文件导致热更新慢的问题
import '@/styles/tailwind.css'
import 'virtual:svg-icons-register'
import store, { persistor } from './redux'
import { isDev } from './utils/index.ts'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        {isDev && <ReactQueryDevtools />}
        <App />
      </QueryClientProvider>
    </PersistGate>
  </Provider>
)
