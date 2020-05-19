<template>
  <section class="breadcrumb">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb__transition">
        <el-breadcrumb-item v-for="item of breadcrumbList" :key="item.path" :to="{ path: item.path }">{{ item.title }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
    <h3 class="breadcrumb__title">{{ title }}</h3>
  </section>
</template>
<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: [],
      title: ''
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
      if (!list.length) return
      this.breadcrumbList = list
      this.title = list[list.length - 1].title
    }
  }
}
</script>

<style lang="less" scoped>
.breadcrumb {
  /deep/ .el-breadcrumb {
    font-size: 14px;
  }
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
.breadcrumb__title {
  font-size: 24px;
  margin: 10px 0 20px;
}
.breadcrumb__transition-enter-active,
.breadcrumb__transition-leave-active {
  transition: all 0.5s;
}

.breadcrumb__transition-enter,
.breadcrumb__transition-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb__transition-leave-active {
  position: absolute;
}
</style>
