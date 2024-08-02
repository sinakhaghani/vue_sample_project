const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '192.168.1.5',
    port: 8080,
    // بقیه تنظیمات شما
  }
})
