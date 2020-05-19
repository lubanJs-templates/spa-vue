<template>
  <section class="total-num">
    <p>this is total num: {{ this.num }}</p>
    <el-button @click="addNum">+</el-button>
    <el-button @click="subtractNum">-</el-button>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { VUEX_MODULE_NAME } from '../store'

const { mapGetters, mapActions } = createNamespacedHelpers(VUEX_MODULE_NAME)

export default {
  name: 'TotalNum',
  computed: {
    ...mapGetters(['num'])
  },
  methods: {
    ...mapActions(['addNum', 'subtractNum'])
  }
}
</script>
