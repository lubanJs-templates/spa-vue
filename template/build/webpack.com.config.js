const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const fs = require('fs')

const config = require('../config/webpack')

const beforePlugins = [new VueLoaderPlugin(), new FriendlyErrorsWebpackPlugin()]

const dllReferenceList = []

const htmlWebpackplugin = new HtmlWebpackPlugin({
  title: '{{name}}',
  filename: 'index.html',
  favicon: path.resolve(__dirname, '../public/favicon.ico'),
  template: path.resolve(__dirname, '../public/index.html'),
  static: {
    css: [],
    js: []
  }
})
function addTagsToHtml(publicPath, callback = () => {}) {
  const files = fs.readdirSync(path.resolve(__dirname, '../public', publicPath))
  files.forEach((file) => {
    callback(file, publicPath)
  })
}

function excuteCommonTags() {
  let tags = config.common.tags
  for (let dirPath of tags) {
    addTagsToHtml(dirPath, (file, publicPath) => {
      if (/\.js$/.test(file)) {
        htmlWebpackplugin.options.static.js.push(path.join(publicPath, file))
      }
      if (/\.css$/.test(file)) {
        htmlWebpackplugin.options.static.css.push(path.join(publicPath, file))
      }
    })
  }
}

addTagsToHtml('static/libs', (file, publicPath) => {
  if (/.*\.manifest.json/.test(file)) {
    dllReferenceList.push(
      new webpack.DllReferencePlugin({
        manifest: require(path.resolve(__dirname, '../public', publicPath, file))
      })
    )
  }
  if (/.*\.dll.js/.test(file)) {
    htmlWebpackplugin.options.static.js.push(path.join(publicPath, file))
  }
})

excuteCommonTags()

let plugins = beforePlugins.concat(dllReferenceList, htmlWebpackplugin)
module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'static/js/[name]_bundle.js',
    chunkFilename: 'static/js/[name]_chunk.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.common.alias
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: ['thread-loader', 'vue-loader']
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
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 10000,
              name: '[name]_[hash:6].[ext]',
              outputPath: 'static/images'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/fonts'
            }
          }
        ]
      }
    ]
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
