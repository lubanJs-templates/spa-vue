<template>
  <section class="user">
    <Icon class="user__icon" iconName="iconic_xiaoxi" @click="handleNotice" />
    <Icon class="user__icon" iconName="iconic_bangzhu" @click="handleHelp" />
    <img class="user__avatar" src="static/images/avatar.png" :alt="username" />
    <span class="user__name">{{ username }}</span>
    <Icon v-show="!isScreenfull" class="user__icon user__screenfull-btn" iconName="iconic_jinruquanping" @click="handleEnterScreenfull" />
    <Icon v-show="isScreenfull" class="user__icon user__screenfull-btn" iconName="iconic_tuichuquanping" @click="handleExitScreenfull" />
  </section>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'User',
  data() {
    return {
      username: 'admin',
      isScreenfull: false
    }
  },
  created() {
    this.initScreenfullStatus()
    this.handleScreenfullChange()
  },
  methods: {
    handleScreenfullChange() {
      screenfull.off('change')
      screenfull.onchange(() => {
        this.isScreenfull = screenfull.isFullscreen
      })
    },
    handleEnterScreenfull() {
      if (screenfull.isEnabled) {
        screenfull.request()
      } else {
        this.$message({
          message: '您的浏览器不支持全屏模式',
          type: 'warning'
        })
      }
    },
    handleExitScreenfull() {
      screenfull.exit()
    },
    initScreenfullStatus() {
      this.isScreenfull = screenfull.isFullscreen
    },
    handleNotice() {
      this.$message({
        message: '这是消息通知',
        type: 'info'
      })
    },
    handleHelp() {
      this.$message({
        message: '这是帮助信息',
        type: 'info'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  color: #757780;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.user__icon {
  margin-right: 20px;
  cursor: pointer;
}
.user__screenfull-btn {
  margin-right: 0;
}
.user__avatar {
  width: 32px;
  height: 32px;
  margin-right: 6px;
}
.user__name {
  font-size: 14px;
  padding-right: 20px;
  border-right: 1px solid #cbccd4;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
