<template>
  <section class="db-type">
    这是一个通过接口获取数据的例子,当你看到notFound弹框就对了
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { VUEX_MODULE_NAME } from '../store'

const { mapGetters, mapActions } = createNamespacedHelpers(VUEX_MODULE_NAME)
export default {
  name: 'DbType',
  computed: {
    ...mapGetters(['num'])
  },
  methods: {
    ...mapActions(['fetchDbTypes'])
  },
  mounted() {
    this.fetchDbTypes()
  }
}
</script>
