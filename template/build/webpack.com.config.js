const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const fs = require('fs')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

const dllReferenceList = []
const addAssetHtmlList = []

const plugins = [
  new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: ['dist'],
  }),
  new VueLoaderPlugin(),
  new FriendlyErrorsWebpackPlugin(),
  ...dllReferenceList,
  new HtmlWebpackPlugin({
    title: 'Webpack Output Management',
    filename: 'index.html',
    template: path.resolve(__dirname, '../public/index.html'),
  }),
  ...addAssetHtmlList
]

const files = fs.readdirSync(path.resolve(__dirname, '../dll'))

files.forEach((file) => {
  if (/.*\.dll.js/.test(file)) {
    dllReferenceList.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, '../dll', file),
      })
    )
  }
  if (/.*\.manifest.json/.test(file)) {
    addAssetHtmlList.push(
      new webpack.DllReferencePlugin({
        manifest: require(path.resolve(__dirname, '../dll', file)),
      })
    )
  }
})
module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'static/js/[name].bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '', // 设置访问的二级目录
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  //  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: ['thread-loader', 'vue-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:6].[ext]',
              outputPath: 'static/images',
            },
          },
          'image-webpack-loader', // TODOS: 这里有待优化压缩图片会使打包速度变慢
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
      },
    },
  },
}
