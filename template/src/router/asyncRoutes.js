export default new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        path: 'page',
        icon: 'iconic_xiaoxi',
        title: 'page',
        children: [
          {
            path: '/page1',
            icon: 'iconic_xiaoxi',
            title: 'page1',
            componentName: 'page1',
            children: [
              {
                path: '/page2-1',
                icon: 'iconic_xiaoxi',
                title: 'page2-1',
                componentName: 'page1-1'
              }
            ]
          },
          {
            path: '/page1-2',
            icon: 'iconic_xiaoxi',
            title: 'page1-1',
            componentName: 'page1-1'
          }
        ]
      },
      {
        path: '/page2',
        icon: 'iconic_xiaoxi',
        title: 'page2',
        componentName: 'page2'
      }
    ])
  }, 2000)
})
