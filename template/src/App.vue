<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './style/index.less';
#app {
  height: 100%;
  background: #f5f5f5;
}
</style>
