import Vue from 'vue'
import VueRouter from 'vue-router'
import http from 'luban-http'

import asyncRoutes from './config/asyncRoutes'
import config from './config'
import { addRoutesToMainPage, convertRoutesToVueRoutes } from './helper'
import authentication from './authentication'

import MainPage from '../pages/main'

Vue.use(VueRouter)

const { mainRoutes, commonRoutes, otherRoutes } = config

const constantRoutes = [...otherRoutes, ...commonRoutes]
const constantVueRoutes = convertRoutesToVueRoutes(constantRoutes)

const initRoutes = () => {
  if (config.async) {
    Vue.prototype.$isSuccessFetchAsyncRoutes = false
    return constantVueRoutes
  } else {
    return [...addRoutesToMainPage(MainPage, convertRoutesToVueRoutes(mainRoutes)), ...constantVueRoutes]
  }
}

const createRouter = (routes) =>
  new VueRouter({
    mode: config.mode,
    base: config.base,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes
  })
const routes = initRoutes()
const router = createRouter(routes)

router.mainRoutes = mainRoutes

router.resetAsyncRouter = (mainRoutes = []) => {
  const newRouter = createRouter([...addRoutesToMainPage(MainPage, convertRoutesToVueRoutes(mainRoutes)), ...constantVueRoutes])
  router.matcher = newRouter.matcher
  router.mainRoutes = mainRoutes
  Vue.$isSuccessFetchAsyncRoutes = true
}
router.beforeEach(async (to, from, next) => {
  http.clearHttpRequestList()
  // 验证步骤
  // 1. 是否在白名单
  if (config.whitelist[to.name]) {
    next()
    return
  }
  // 2. 获取用户
  const store = router.app.$options.store
  const { sn } = store.state.user
  if (!sn) {
    await store.dispatch('user/fetchUser')
  }
  // 3. 是否为异步获取路由
  if (config.async) {
    if (!Vue.$isSuccessFetchAsyncRoutes) {
      const routes = await asyncRoutes
      router.resetAsyncRouter(routes)
      next(to.path)
      return
    }
  }

  // 4. 鉴权
  authentication({
    router,
    to,
    next
  })
})
export default router
