import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { exclude, include } from './build/optimize'
import createVersionFile from './build/version'

export default defineConfig({
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
            @import "@/styles/variable.less";
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
    createVersionFile()
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
})
