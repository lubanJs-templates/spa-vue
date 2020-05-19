import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export const VUEX_MODULE_NAME = 'page1-2'

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
