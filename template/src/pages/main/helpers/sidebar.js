export const convertRoutesToRouterMap = (routes) => {
  const map = {
    pathMap: {},
    indexMap: {}
  }
  let index = 1
  const createMap = (route) => {
    if (!route.hidden && (!route.children || !route.children.filter((item) => !item.hidden).length)) {
      map.pathMap[route.path] = index
      map.indexMap[index] = route.path
      index++
    }
    if (route.children) {
      for (let item of route.children) {
        createMap(item)
      }
    }
  }
  for (let item of routes) {
    createMap(item)
  }

  return map
}

export const convertRoutesToSidebarMenu = (routes) => {
  const menu = []
  const createSidebarMenu = (route) => {
    let routeObj = {
      path: route.path,
      meta: {
        icon: route.icon || '',
        title: route.title || '',
        hidden: route.hidden || false
      }
    }
    if (route.children) {
      routeObj.children = []
      for (let item of route.children) {
        routeObj.children.push(createSidebarMenu(item))
      }
      routeObj.children = routeObj.children.filter((item) => !item.meta.hidden)
      if (!routeObj.children.length) {
        delete routeObj.children
      }
    }
    return routeObj
  }
  for (let item of routes) {
    menu.push(createSidebarMenu(item))
  }
  return menu
}
