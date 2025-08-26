// 全局写 babel.config.json, 不放在 vite.config.ts 的原因:
// 使其 支持 Vue2、装饰器、class 私有属性, 因为 这些工具 不认 Vite 配置, 只认 Babel 文件
// @vitejs/plugin-legacy 的 @babel/preset-env 版本优先使用的是 package.json 中的
export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['defaults', 'chrome 52', 'firefox 54', 'not IE 11'],
        // 按需生成代码
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ],
  plugins: []
}
