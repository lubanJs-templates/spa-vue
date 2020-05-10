import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "mainPage" */ '../pages/main/index.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes
})

export default router
