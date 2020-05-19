export default [
  {
    path: 'page1',
    icon: 'iconic_xiaoxi',
    title: 'page1',
    componentName: 'page1',
    children: [
      {
        path: '/page1-1',
        icon: 'iconic_xiaoxi',
        title: 'page1-1',
        componentName: 'page1-1',
        children: [
          {
            path: '/page1-1/:id',
            icon: 'iconic_xiaoxi',
            title: 'page1-id',
            componentName: 'page1-1',
            hidden: true
          }
        ]
      },
      {
        path: '/page1-2',
        icon: 'iconic_xiaoxi',
        title: 'page1-2',
        componentName: 'page1-2'
      }
    ]
  },
  {
    path: '/page2',
    icon: 'iconic_xiaoxi',
    title: 'page2',
    componentName: 'page2'
  }
]
