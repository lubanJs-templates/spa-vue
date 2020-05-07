import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@components/element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
