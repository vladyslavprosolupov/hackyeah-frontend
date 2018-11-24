module.exports = {
  lintOnSave: 'error',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/vars.scss";@import "@/assets/sass/mixins.scss";`
      }
    }
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: true,
    hotOnly: false
  }
}
