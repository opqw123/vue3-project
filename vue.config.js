const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0', // 允许IP访问
    // port: 8020,//端口号
    open: true,
    client: {
      overlay: false //编译错误时，取消全屏覆盖（建议关掉）
    },
    proxy: {
      [process.env.VITE_APP_BASE_API]: {
        changeOrigin: true,
        target: process.env.VITE_APP_TARGET_URL,
        secure: false,
        pathRewrite: { [`^${process.env.VITE_APP_BASE_API}`]: '' }
      },
    }
  }
})