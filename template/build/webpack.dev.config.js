const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const commonConfig = require('./webpack.com.config')
const proxyTable = require('../proxyTable')

module.exports = merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: ['eslint-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'vue-style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader',
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'eval-cheap-module-source-map', // 源码打印
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    stats: 'errors-only',
    historyApiFallback: true,
    hot: true,
    hotOnly: true, // 编译失败不进行热更新
    compress: true, // 启用gzip压缩
    port: '8080',
    host: '0.0.0.0',
    overlay: true,
    open: true,
    proxy: proxyTable,
  },
})
