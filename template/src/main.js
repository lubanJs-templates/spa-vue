import Vue from 'vue'
import NProgress from 'nprogress'
import http from 'luban-http'
import 'normalize.css'
import 'nprogress/nprogress.css'

import App from './App'
import router from './router'
import store from './store'

import '@components/element-ui'
import Icon from '@components/icon'

NProgress.configure({ showSpinner: false })

http.setOptions({
  timeout: 30000, // 设置超时时长
  baseURL: '', // 设置baseURL
  requestInterceptor: (config) => {
    NProgress.start()
  }, //发送请求成功的回调
  requestInterceptorError: (error) => {
    NProgress.done()
  }, // 发送请求失败的回调
  responseInterceptor: (response) => {
    NProgress.done()
  }, // 请求响应成功的回调
  responseInterceptorError: (error) => {
    NProgress.done()
  }, // 请求响应失败的回调
  commonErrorHandling: (message, res) => {
    Vue.prototype.$message.error(message || '未知异常')
  } // 统一错误处理的回调
})

Vue.use(Icon)

Vue.prototype.$ELEMENT = { size: 'small' }

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
