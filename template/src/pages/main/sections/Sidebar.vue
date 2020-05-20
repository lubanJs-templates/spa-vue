<template>
  <section class="sidebar">
    <div class="sidebar__menu-box">
      <h3 :class="['sidebar__title', { 'sidebar__title--hidden': isCollapse }]">{{ name }}</h3>
      <el-scrollbar>
        <div class="sidebar__menu">
          <el-menu :default-active="active" class="sidebar__el-menu" text-color="#757780" active-text-color="#4d7bff" unique-opened :collapse="isCollapse" @select="handleMunuSelect">
            <SidebarMenuItem v-for="item of menuList" :node="item" :key="item.name" />
          </el-menu>
        </div>
      </el-scrollbar>
    </div>
    <div class="sidebar__collapse-btn">
      <Icon v-show="!isCollapse" class="sidebar__collapse-icon" iconName="iconic_shouqi" @click="handleCollapse" />
      <Icon v-show="isCollapse" class="sidebar__collapse-icon" iconName="iconic_zhankai" @click="handleCollapse" />
    </div>
  </section>
</template>
<script>
import { APP } from '@const/index.js'
import { convertRoutesToRouterMap, convertRoutesToSidebarMenu } from '../helpers/sidebar'
import SidebarMenuItem from './SidebarMenuItem'
export default {
  name: 'Sidebar',
  components: {
    SidebarMenuItem
  },
  data() {
    const map = convertRoutesToRouterMap(this.$router.mainRoutes, this.$store.state.user.role)
    return {
      name: APP.name,
      isCollapse: false,
      menuList: convertRoutesToSidebarMenu(this.$router.mainRoutes, this.$store.state.user.role),
      active: '',
      routerMap: map.pathMap,
      indexMap: map.indexMap
    }
  },
  watch: {
    $route: {
      handler: 'setActive',
      immediate: true
    }
  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    handleMunuSelect(index, indexPath) {
      if (index.indexOf('http') === 0) {
        window.location.href = index
      } else {
        this.$router.push(index)
      }
    },
    setActive(route) {
      const matched = route.matched
      let findFlag = false
      for (let i = matched.length - 1; i >= 0; i--) {
        let route = matched[i]
        if (this.routerMap[route.path]) {
          this.active = route.path
          findFlag = true
          break
        }
      }
      if (!findFlag) {
        this.$router.push(this.indexMap[1])
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  height: 100%;
  position: relative;
  background: #fff;
  padding-right: 14px;
  box-sizing: content-box;
  /deep/ .el-scrollbar {
    flex: 1;
    min-height: 0;
    min-width: 58px;
  }
  /deep/ .el-scrollbar__wrap {
    overflow: auto;
  }
}
.sidebar__menu {
  flex: 1;
  min-height: 0;
  overflow: auto;
}
.sidebar__menu-box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-right: 1px solid #ededed;
  height: 100%;
}
.sidebar__title {
  color: #40424c;
  font-size: 22px;
  padding: 30px 0;
  text-align: center;
  margin: 0;
  &.sidebar__title--hidden {
    display: none;
  }
}

.sidebar__el-menu {
  border-right: none;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
.sidebar__collapse-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 50px;
  cursor: pointer;
  width: 17px;
  overflow: hidden;
  .sidebar__collapse-icon {
    transform: translateX(-16px);
  }
}
</style>
<style lang="less">
.sidebar__menu,
.sidebar__popper {
  & .el-menu--collapse {
    width: 58px;
  }
  & .sidebar-menu-item__menu-title {
    padding-left: 10px;
  }
  & .el-menu-item {
    user-select: none;
    &:focus {
      background: none;
    }
    &.is-active {
      background: #ecf5ff;
      & .sidebar__el-menu-icon {
        background: #4d7bff;
      }
      &::after {
        transform: scaleY(1);
        opacity: 1;
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    &::after {
      content: '';
      transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border-left: 3px solid #4d7bff;
      opacity: 0;
      transform: scaleY(0.0001);
      box-sizing: border-box;
    }
  }
}
</style>
