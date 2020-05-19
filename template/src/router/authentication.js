export default ({ router, to, next }) => {
  const { roles } = to.meta
  // 判断是否需要鉴权验证
  if (Array.isArray(roles) && roles.length) {
    // 获取当前用户权限
    const role = router.app.$options.store.state.user.role
    // 鉴权验证通过
    if (role && roles.includes(role)) {
      next()
      return
    }
    // 不通过
    next({ name: '401' })
    return
  }
  next()
}
