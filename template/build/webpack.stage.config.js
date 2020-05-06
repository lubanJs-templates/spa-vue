const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const prodConfig = require('./webpack.prod.config')

module.exports = merge.smart(prodConfig, {
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerHost: '0.0.0.0',
      analyzerPort: 8889,
      openAnalyzer: true
    })
  ]
})
