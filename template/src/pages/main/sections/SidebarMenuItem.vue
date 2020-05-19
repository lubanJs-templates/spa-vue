<template>
  <el-submenu popper-class="sidebar__popper" v-if="!node.meta.hidden && node.children" :index="node.path" :key="node.path" :disabled="node.meta.disabled">
    <template slot="title">
      <Icon class="sidebar-menu-item__icon" :iconName="node.meta.icon" />
      <span class="sidebar-menu-item__menu-title">{{ node.meta.title }}</span>
    </template>
    <template v-for="child of node.children">
      <SidebarMenuItem v-if="!child.meta.hidden" :node="child" :key="child.path">{{ child.meta.title }}</SidebarMenuItem>
      <SidebarMenuItem v-else-if="child.meta.hidden && child.children" v-for="child2 of child.children" :node="child2" :key="child2.path">{{ child2.meta.title }}</SidebarMenuItem>
    </template>
  </el-submenu>
  <el-menu-item
    v-else-if="!node.meta.hidden && (!node.meta.roles || (node.meta.roles && node.meta.roles.includes($store.state.user.role)))"
    :index="node.meta.url || node.path"
    :key="node.path"
    :disabled="node.meta.disabled"
  >
    <Icon class="sidebar-menu-item__icon" :iconName="node.meta.icon" />
    <span class="sidebar-menu-item__menu-title" slot="title">{{ node.meta.title }}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: 'SidebarMenuItem',
  props: {
    node: {
      type: Object,
      default() {
        return {}
      },
      require: true
    }
  }
}
</script>

<style>
.sidebar-menu-item__icon {
  font-size: 18px;
}
</style>
