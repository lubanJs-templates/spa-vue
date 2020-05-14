export const arrayToMap = (array = []) => {
  const map = {}
  for (let item of array) {
    map[item] = true
  }
  return map
}

export const addRoutesToMainPage = (MainPage, routes = []) => {
  return [
    {
      path: '/',
      name: 'mainPage',
      meta: {
        root: true
      },
      component: MainPage,
      children: routes
    }
  ]
}

export const lazyload = (page) => {
  return (resolve) => {
    import(/* webpackChunkName: "[request]" */ `../pages/${page}/index.vue`).then((mod) => {
      resolve(mod)
    })
  }
}

export const convertRoutesToVueRoutes = (rootRoutes) => {
  const vueRoutes = []
  const createNewRoute = (route) => {
    let routeObj = {
      path: route.path,
      meta: {
        title: route.title
      },
      component: route.componentName ? lazyload(route.componentName) : route.component
    }
    if (route.children) {
      routeObj.children = []
      for (let item of route.children) {
        routeObj.children.push(createNewRoute(item))
      }
    }
    return routeObj
  }
  for (let item of rootRoutes) {
    vueRoutes.push(createNewRoute(item))
  }
  return vueRoutes
}
