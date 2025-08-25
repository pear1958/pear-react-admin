import { ConfigEnv, loadEnv, UserConfigExport } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import { exclude, include } from './build/optimize'

// https://cn.vitejs.dev/config/#conditional-config
export default ({ mode }: ConfigEnv): UserConfigExport => {
  // 加载 envDir 中的 .env 文件, 默认情况下只有前缀为 VITE_ 的会被加载
  const env = loadEnv(mode, process.cwd())

  return {
    // 自动将所有静态资源路径调整为包含该前缀, 包括 HTML、CSS、JavaScript 和图片等
    // import logo from './assets/logo.png' -> logo: /my-app/assets/logo.png
    base: '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    server: {
      open: true, // 自动开启窗口
      host: true, // 监听本地所有IP
      proxy: {
        [env.VITE_BASE_URL]: {
          target: env.VITE_PROXY_URL,
          changeOrigin: true,
          rewrite: path => path.replace(env.VITE_BASE_URL, '')
        }
      },
      // 预热文件以提前转换和缓存结果, 降低启动期间的初始页面加载时长并防止转换瀑布
      warmup: {
        clientFiles: ['./index.html', './src/{views,components}/*']
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "@/styles/mixin.less";
          `
        }
      }
    },
    plugins: [
      react(),
      // 加载SVG文件作为React组件
      svgr(),
      // 使用 svg 图标
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
        symbolId: 'icon-[dir]-[name]'
      }),
      // 打包后请求 web_version_by_plugin.json 文件的代码加了 ?t=${Date.now()} 参数
      webUpdateNotice({
        logVersion: true,
        versionType: 'build_timestamp',
        hiddenDefaultNotification: true
      }),
      legacy({
        // 基于代码按需生成 polyfill
        // defaults: > 0.5%, last 2 versions, Firefox 的长期支持版本 等
        targets: ['defaults', 'chrome 52', 'firefox 54', 'not IE 11'],
        // 提供所有可供挑选的 polyfill
        corejs: { version: 3, proposals: true },
        // 补充  core-js 不包含的补丁
        additionalLegacyPolyfills: [
          'regenerator-runtime/runtime', // async/await 补丁 -> generator 函数
          'whatwg-fetch', // fetch API
          'url-search-params-polyfill', // URLSearchParams API
          'request-idle-callback-polyfill', // 浏览器空闲任务: requestIdleCallback 补丁
          'intersection-observer' // IntersectionObserver 补丁: 监听元素是否进入 / 离开视口
        ]
      })
    ],
    // 解决 Vite 启动完之后首页加载慢的问题
    optimizeDeps: {
      include, // 启动时 预加载这些包
      exclude
    },
    build: {
      // 关闭source-map 减小打包后的文件体积
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      // esbuild 打包更快, 但是不能去除 console.log
      minify: 'esbuild',
      rollupOptions: {
        output: {
          // 静态资源分类和打包
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  }
}
