const merge = require('webpack-merge')
const prodConfig = require('./webpack.prod.config')

module.exports = merge.smart(prodConfig, {
  devtool: 'eval-cheap-module-source-map', // 源码打印
})
