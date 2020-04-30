const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.com.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const smp = new SpeedMeasurePlugin()

const webpackConfig = merge.smart(commonConfig, {
  output: {
    filename: 'static/js/[name].[contenthash:6].bundle.js',
    chunkFilename: 'static/js/vender.[id].[contenthash:6].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'less-loader',
          'postcss-loader',
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/style.[contenthash:6].css',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist'),
      },
    ]),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // 压缩css
      new OptimizeCssAssetsWebpackPlugin(),
      // 压缩js
      new TerserPlugin({
        parallel: true,
        extractComments: false,
      }),
    ],
  },
  devtool: 'none',
})
module.exports = smp.wrap(webpackConfig)
