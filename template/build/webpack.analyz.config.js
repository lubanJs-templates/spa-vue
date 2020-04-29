const merge = require('webpack-merge')
const prodConfig = require('./webpack.prod.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge.smart(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerHost: '0.0.0.0',
      analyzerPort: 8889,
      openAnalyzer: true,
    }),
  ]
})
