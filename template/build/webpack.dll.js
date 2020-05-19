const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = require('../config/webpack')

module.exports = {
  mode: 'production', // 环境
  entry: config.dll.entry,
  output: {
    filename: '[name]_[hash:6].dll.js', // 输出的名字
    path: path.resolve(__dirname, config.dll.outputPath), // 输出的文件目录
    library: '[name]' // 将我们打包出来的文件以全部变量的形式暴露，可以在浏览器变量的名字进行访问
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, config.dll.outputPath)]
    }),
    // 对生成的库文件进行分析，生成库文件与业务文件的映射关系，将结果放在 mainfest.json 文件中
    new webpack.DllPlugin({
      name: '[name]', // 和上面的 library 输出的名字要相同
      path: path.resolve(__dirname, config.dll.outputPath, '[name]_[hash:6].manifest.json')
    })
  ]
}
