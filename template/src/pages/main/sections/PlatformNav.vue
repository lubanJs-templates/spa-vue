<template>
  <section class="platform-nav">
    <a :class="['platform-nav__link', { 'platform-nav__link--active': active === item.name }]" :href="item.url" v-for="item of platformList" :key="item.name">{{ item.name }}</a>
  </section>
</template>

<script>
import { PLATFORM_NAV } from '@const/index.js'
export default {
  name: 'PlatformNav',
  data() {
    return {
      platformList: PLATFORM_NAV.list,
      active: PLATFORM_NAV.active
    }
  }
}
</script>

<style lang="less" scoped>
.platform-nav {
  padding: 0 20px;
}
.platform-nav__link {
  color: #757780;
  font-size: 14px;
  text-decoration: none;
  margin-right: 20px;
  transition: 0.3s ease;
  outline: 0;
  &:hover,
  &.platform-nav__link--active {
    color: #40424c;
  }
  &.platform-nav__link--active {
    font-weight: bold;
  }
}
</style>
