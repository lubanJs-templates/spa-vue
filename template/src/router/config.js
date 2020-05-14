import { arrayToMap } from '@helpers/router'
import mainRoutes from './routes/main'
import commonRoutes from './routes/common'
import otherRoutes from './routes/other'

export default {
  mode: 'hash',
  base: '',
  async: false,
  whitelist: arrayToMap(['loginPage']),
  mainRoutes,
  commonRoutes,
  otherRoutes
}
