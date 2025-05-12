/** @type {import('tailwindcss').Config} */
export default {
  // 不在 content 包括的文件内, 你编写的 class, 是不会生成对应的css工具类的
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  // 取消 TailwindCSS 内置的全局样式
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      // 添加颜色  eg: text-primary
      colors: {
        'dark-content': '#1f1f1f', // eg: 内容区域暗黑色
        'dark-main': '#141414', // eg: 布局区域暗黑色
        // primary: 'var(--el-color-primary)',
        // 'base-color': 'var(--el-text-color-primary)'
      }
    }
  },
  plugins: []
}
