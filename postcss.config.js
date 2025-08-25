// 导出PostCSS配置对象，Vite会自动读取并应用这些插件
// 按照配置中的顺序依次执行的（前一个插件处理完的结果会传递给下一个插件）
export default {
  plugins: {
    // 由 tailwindcss 插件本身解析，用于将 Tailwind 特有的语法转换为普通 CSS
    tailwindcss: {},
    // 转换 现代CSS 为 旧浏览器 兼容版本（核心兼容性插件）
    'postcss-preset-env': {
      // stage：指定需要转换的 CSS 特性阶段（0-4，数字越小包含越多实验性特性）
      // stage:3 表示只转换已稳定的现代 CSS 特性（推荐）
      stage: 3,
      // 配置目标浏览器（与autoprefixer的overrideBrowserslist保持一致即可）
      browsers: ['> 1%', 'last 2 versions', 'not dead'],
      autoprefixer: false // 禁用内置的 autoprefixer，避免重复处理
    },
    // 自动添加浏览器前缀（核心兼容性插件）
    autoprefixer: {
      // 配置需要兼容的浏览器范围（覆盖默认配置）
      // 参考：https://github.com/browserslist/browserslist#queries
      overrideBrowserslist: [
        '> 1%', // 覆盖全球1%以上用户使用的浏览器
        'last 2 versions',
        'not dead' // 排除已停止维护的浏览器
      ]
    },
    // 生产环境启用CSS压缩（仅在构建时生效，开发环境不压缩以便调试）
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: 'default' // 压缩配置（使用预设的安全压缩模式）
          }
        }
      : {})
  }
}
