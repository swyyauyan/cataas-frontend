// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/sass/size.sass"'
      }
    }
  }
}
