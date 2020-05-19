import { arrayToMap } from '../helper'
import mainRoutes from './mainRoutes'
import commonRoutes from './commonRoutes'
import otherRoutes from './otherRoutes'

export default {
  mode: 'hash',
  base: '',
  async: false,
  whitelist: arrayToMap(['login', '500']),
  mainRoutes,
  commonRoutes,
  otherRoutes
}
