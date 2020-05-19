import types from './types'

export default {
  [types.SET_USER](state, user) {
    Object.assign(state, user)
  },
  [types.DELETE_USER](state) {
    state.sn = ''
    state.username = ''
    state.role = null
  }
}
