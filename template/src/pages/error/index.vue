<template>
  <section class="error-page">
    <div class="error-page__box">
      <div class="error-page__img-box">
        <img class="error-page__img" src="static/images/404.png" alt="404" />
        <div class="error-page__img-name">{{ $route.name }}</div>
      </div>
      <div class="error-page__error-item" v-if="$route.name == 404">
        <div class="error-page__error-item__oops">您访问的页面找不到了！</div>
        <div class="error-page__error-item__info">请检查您输入的网址是否正确。</div>
        <el-button type="primary" @click="handleClick">返回首页</el-button>
      </div>
      <div class="error-page__error-item" v-if="$route.name == 401 || $route.name == 403">
        <div class="error-page__error-item__oops">您没有权限访问当前资源！</div>
        <div class="error-page__error-item__info">请联系管理员。</div>
        <el-button type="primary" @click="handleClick">返回首页</el-button>
      </div>
      <div class="error-page__error-item" v-if="$route.name == 500">
        <div class="error-page__error-item__oops">服务器出错啦！</div>
        <div class="error-page__error-item__info">请返回重试。</div>
        <el-button type="primary" @click="handleClick">返回首页</el-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'errorPage',
  computed: {
    message() {
      return '没有找到当前页面......'
    }
  },
  methods: {
    handleClick() {
      window.location.href = '/'
    }
  }
}
</script>

<style lang="less" scoped>
.error-page {
  background: #fff;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.error-page__box {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .error-page__img-box {
    position: relative;
    float: left;
    width: 400px;
    overflow: hidden;
    margin-bottom: 12px;
    margin-right: 20px;
    .error-page__img {
      width: 100%;
    }
    .error-page__img-name {
      position: absolute;
      opacity: 0;
      color: #d5d7e3;
      font-weight: bold;
      font-size: 120px;
      animation-name: cloudLeft;
      animation-duration: 0.5s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      animation-delay: 0.3s;
      @keyframes cloudLeft {
        0% {
          top: 0;
          left: 0;
          opacity: 0;
        }
        100% {
          top: 70px;
          left: 119px;
          opacity: 1;
        }
      }
    }
  }
  .error-page__error-item {
    position: relative;
    float: left;
    width: 400px;
    overflow: hidden;
    .error-page__error-item__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      color: #d5d7e3;
    }
    .error-page__error-item__info {
      font-size: 14px;
      line-height: 24px;
      color: grey;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
