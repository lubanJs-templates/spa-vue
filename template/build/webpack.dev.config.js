const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const commonConfig = require('./webpack.com.config')
const proxy = require('../config/proxy')
const config = require('../config/webpack')

module.exports = merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, '../dist', config.dev.baseUrl)
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        loader: 'eslint-loader',
        options: {
          fix: true
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less/,
        use: ['style-loader', 'vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src')
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist', config.dev.baseUrl),
        ignore: ['.*']
      }
    ]),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${config.dev.port}${config.dev.baseUrl}`]
      }
    })
  ],
  devtool: 'eval-cheap-module-source-map', // 源码打印
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    hot: true,
    hotOnly: true, // 编译失败不进行热更新
    compress: true, // 启用gzip压缩
    port: config.dev.port,
    host: config.dev.host,
    overlay: true,
    open: false,
    quiet: true,
    proxy
  }
})
