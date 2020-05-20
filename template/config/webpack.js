const path = require('path')

function resolve() {
  return path.resolve(__dirname, ...arguments)
}

module.exports = {
  // 环境共有配置
  common: {
    alias: {
      '@api': resolve('../src/api'),
      '@assets': resolve('../src/assets'),
      '@components': resolve('../src/components'),
      '@layouts': resolve('../src/layouts'),
      '@pages': resolve('../src/pages'),
      '@style': resolve('../src/style'),
      '@utils': resolve('../src/utils'),
      '@const': resolve('../src/const'),
      '@mixins': resolve('../src/mixins'),
      '@store': resolve('../src/store'),
      '@router': resolve('../src/router'),
      '@': resolve('../src')
    },
    tags: ['static/fonts'] //加入到html中的标签路径
  },
  // 用于第三方包分离，加快打包速度
  dll: {
    entry: {
      vendors: ['vue', 'vue-router', 'vuex', 'luban-http', 'nprogress'] // 将不经常变的第三方库打包
    },
    resolve: {
      alias: {
        'vue': resolve('../node_modules/vue/dist/vue.min.js'),
        'vue-router': resolve('../node_modules/vue-router/dist/vue-router.min.js'),
        'vuex': resolve('../node_modules/vuex/dist/vuex.min.js'),
        'luban-http': resolve('../node_modules/luban-http/build/index.js')
    }
    },
    outputPath: '../public/static/libs' // dll文件输出路径
  },
  // 开发环境配置
  dev: {
    port: '8080', // devServer服务端口
    host: '0.0.0.0', // devServer服务host
    baseUrl: '' // 二级目录
  },
  // 预发布环境配置
  stage: {},
  // 生产环境配置
  prod: {}
}
