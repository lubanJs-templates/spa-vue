<template>
  <section class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item of breadcrumbList" :key="item.path" :to="{ path: item.path }">{{ item.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>
<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: []
    }
  },
  watch: {
    $route: {
      handler: 'createBreadcrumbList',
      immediate: true
    }
  },
  methods: {
    createBreadcrumbList(routeObj) {
      const matched = routeObj.matched
      const list = []
      for (let route of matched) {
        if (route.meta.root) {
          continue
        }
        list.push({
          path: route.path,
          title: route.meta.title
        })
      }
      this.breadcrumbList = list
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb {
  /deep/ .el-breadcrumb__separator {
    color: #e3e3e3;
  }
  /deep/ .el-breadcrumb__inner {
    color: #acadb5;
    font-weight: normal;
    &:last-child {
      color: #757780;
    }
  }
}
</style>
