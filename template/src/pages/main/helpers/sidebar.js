export const convertRoutesToRouterMap = (routes, role) => {
  const map = {
    pathMap: {},
    indexMap: {}
  }
  let index = 1
  const createMap = (route) => {
    if (
      !route.hidden &&
      (!route.roles || (route.roles && route.roles.includes(role))) &&
      (!route.children || !route.children.filter((item) => !item.hidden && (!item.roles || (item.roles && item.roles.includes(role)))).length)
    ) {
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

export const convertRoutesToSidebarMenu = (routes, role) => {
  const menu = []
  const createSidebarMenu = (route) => {
    let routeObj = {
      path: route.path,
      meta: {
        icon: route.icon || '',
        title: route.title || '',
        hidden: route.hidden || false,
        url: route.url || '',
        roles: route.roles || null
      }
    }
    if (route.children) {
      routeObj.children = []
      for (let item of route.children) {
        routeObj.children.push(createSidebarMenu(item))
      }
      routeObj.children = routeObj.children.filter((item) => !item.meta.hidden && (!item.meta.roles || (item.meta.roles && item.meta.roles.includes(role))))
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
