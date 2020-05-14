import Vue from 'vue'
import VueRouter from 'vue-router'

import asyncRoutes from './asyncRoutes'
import config from './config'
import { addRoutesToMainPage, convertRoutesToVueRoutes } from '@helpers/router'
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
router.beforeEach((to, from, next) => {
  // 如果是白名单里的路由直接放行
  console.log(to)
  if (config.whitelist[to.path]) {
    next()
    return
  }
  // 如果未开启异步获取路由直接放行
  if (!config.async) {
    next()
    return
  }
  // 如果获取异步路由状态为未成功则发送请求获取路由
  if (!Vue.$isSuccessFetchAsyncRoutes) {
    asyncRoutes.then((routes) => {
      router.resetAsyncRouter(routes)
      next({ path: to.path })
    })
    return
  }
  next()
})
export default router
