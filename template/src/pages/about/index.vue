<template>
  <section class="about">
    <AboutItem v-for="item of aboutList" :key="item.name">
      <template v-slot:name>{{ item.name }}</template>
      {{ item.discription }}
    </AboutItem>
  </section>
</template>

<script>
import AboutItem from './sections/AboutItem'
export default {
  name: 'AboutPage',
  components: {
    AboutItem
  },
  data() {
    return {
      aboutList: [
        {
          name: 'luban',
          discription: 'luban(鲁班)，鲁班是我司自研工具，目前还在不断完善中，目的是统一公司前端开发规范，提高开发和部署的效率。'
        },
        {
          name: 'vue',
          discription: 'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。'
        }
      ]
    }
  }
}
</script>
