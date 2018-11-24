module.exports = {
  lintOnSave: 'error',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/vars.scss";@import "@/assets/sass/mixins.scss";`
      }
    }
  }
}
