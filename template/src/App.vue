<template>
  <div id="app">
    <Header />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Header from './sections/Header'
import Navbar from './sections/Navbar'
export default {
  name: 'App',
  components: {
    Header,
    Navbar
  }
}
</script>

<style lang="less">
@import './style/index.less';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
