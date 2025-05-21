import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { exclude, include } from './build/optimize'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    open: true
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
    })
  ],
  // 解决 Vite 启动完之后首页加载慢的问题
  optimizeDeps: {
    include, // 启动时 预加载这些包
    exclude
  }
})
