import types from './types'

export default {
  [types.ADD_NUM](state) {
    state.num++
  },
  [types.SUBTRACT_NUM](state) {
    state.num--
  }
}
