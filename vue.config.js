const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/REPO_NAME/' // REPO_NAME을 저장소 이름으로 변경
    : '/'
})
