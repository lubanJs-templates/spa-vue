<template>
  <el-container class="datacenter-v3-layout">
    <el-header class="datacenter-v3-layout__header-box" style="height: 64px;">
      <section class="datacenter-v3-layout__logo">
        <slot name="logo">这里是logo</slot>
      </section>
      <section class="datacenter-v3-layout__platform-nav">
        <slot name="platformNav">这里是平台导航</slot>
      </section>
      <section class="datacenter-v3-layout__user">
        <slot name="user">这里是用户信息</slot>
      </section>
    </el-header>
    <el-container style="min-height: 0;">
      <el-aside class="datacenter-v3-layout__menu-box" width="initial">
        <slot name="menu"></slot>
      </el-aside>

      <el-main class="datacenter-v3-layout__main-box">
        <slot name="main"></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'DatacenterV3Layout'
}
</script>

<style scoped>
.datacenter-v3-layout {
  height: 100%;
}
.datacenter-v3-layout__header-box {
  height: 64px;
  padding-left: 0;
  display: flex;
  align-items: center;
}
.datacenter-v3-layout__logo {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.datacenter-v3-layout__platform-nav {
  flex: 1;
  min-width: 0;
}
.datacenter-v3-layout__main-box {
  background: #fff;
  margin-left: -17px;
}
</style>
