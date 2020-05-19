import ErrorPage from '../../pages/error'

export default [
  {
    path: '/401',
    name: '401',
    component: ErrorPage
  },
  {
    path: '/403',
    name: '403',
    component: ErrorPage
  },
  {
    path: '/500',
    name: '500',
    component: ErrorPage
  },
  {
    path: '*',
    name: '404',
    component: ErrorPage
  }
]
