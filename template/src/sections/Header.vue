<template>
  <section class="header">
    <img src="static/images/logo.png" alt="luban" />
    <Icon class="header__add-icon" icon-name="lubanjiahao" />
    <img src="../assets/images/vue-logo.png" alt="vue" />
  </section>
</template>

<script>
import Icon from '../components/icon/index.js'
export default {
  name: 'Header',
  components: {
    Icon
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  font-size: 40px;
}
.header__add-icon {
  margin: 0 20px;
}
</style>
