const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/automa_for_tabletop_games/' // REPO_NAME을 저장소 이름으로 변경
    : '/'
})
