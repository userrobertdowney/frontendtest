const path = require('path')
const hackPath = path.join(__dirname, '/src/assets/less/base/custom.less')

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      less: {
        modifyVars: {
          // vant自定义样式: 通过less文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${hackPath}";`,
        },
      },
    },
  },
}
