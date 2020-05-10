<template>
  <section class="navbar">
    <div class="navbar__menu-box">
      <h3 :class="['navbar__title', { 'navbar__title--hidden': isCollapse }]">{{ name }}</h3>
      <el-scrollbar>
        <div class="navbar__menu">
          <el-menu default-active="2" class="navbar__el-menu" text-color="#757780" active-text-color="#4d7bff" unique-opened :collapse="isCollapse" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <Icon class="navbar__icon" iconName="iconic_xiaoxi" />
                <span class="navbar__menu-title">导航一</span>
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <Icon class="navbar__icon" iconName="iconic_xiaoxi" />
              <span class="navbar__menu-title" slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <Icon class="navbar__icon" iconName="iconic_xiaoxi" />
              <span class="navbar__menu-title" slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <Icon class="navbar__icon" iconName="iconic_xiaoxi" />
              <span class="navbar__menu-title" slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-scrollbar>
    </div>
    <div class="navbar__collapse-btn">
      <Icon v-show="!isCollapse" class="navbar__collapse-icon" iconName="iconic_shouqi" @click="handleCollapse" />
      <Icon v-show="isCollapse" class="navbar__collapse-icon" iconName="iconic_zhankai" @click="handleCollapse" />
    </div>
  </section>
</template>
<script>
import { APP } from '@const/index.js'
import Icon from '@components/icon'
export default {
  name: 'Navbar',
  data() {
    return {
      name: APP.name,
      isCollapse: false
    }
  },
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    handleOpen() {
      console.log('open')
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 100%;
  position: relative;
  background: #fff;
  padding-right: 14px;
  box-sizing: content-box;
}
.navbar__menu-box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-right: 1px solid #ededed;
  height: 100%;
}
.navbar__title {
  color: #40424c;
  font-size: 22px;
  padding: 30px 0;
  text-align: center;
  margin: 0;
  &.navbar__title--hidden {
    display: none;
  }
}
.navbar__menu {
  flex: 1;
  min-height: 0;
  overflow: auto;
  /deep/ .el-menu--collapse {
    width: 54px;
  }
  /deep/ .el-submenu .el-menu-item {
    padding-left: 50px !important;
    padding-right: 10px;
  }
  /deep/ .el-menu-item {
    user-select: none;
    &.is-active {
      background: #ecf5ff;
      & .navbar__el-menu-icon {
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
.navbar__el-menu {
  border-right: none;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
.navbar__icon {
  vertical-align: middle;
}
.navbar__collapse-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 50px;
  cursor: pointer;
  width: 17px;
  overflow: hidden;
  .navbar__collapse-icon {
    transform: translateX(-16px);
  }
}
.navbar__menu-title {
  margin-left: 10px;
}
</style>
