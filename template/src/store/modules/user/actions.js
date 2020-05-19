import types from './types'

const user = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      sn: '00001',
      username: 'admin',
      role: 1
    })
  }, 2000)
})

export default {
  async fetchUser({ commit }) {
    let data = await user
    commit(types.SET_USER, data)
  },
  deleteUser({ commit }) {
    commit(types.DELETE_USER)
  }
}
