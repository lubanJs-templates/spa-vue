<template>
  <div>
    这是一个vuex动态加载的例子
    <TotalNum />
    <DbType />
  </div>
</template>

<script>
import store, { VUEX_MODULE_NAME } from './store'

export default {
  name: 'page1-2Page',
  components: {
    TotalNum: () => import('./sections/TotalNum'),
    DbType: () => import('./sections/DbType')
  },
  beforeCreate() {
    this.$store.registerModule(VUEX_MODULE_NAME, store)
  },
  destroyed() {
    this.$store.unregisterModule(VUEX_MODULE_NAME)
  }
}
</script>
