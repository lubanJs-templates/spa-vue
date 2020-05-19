import types from './types'
import { ApiDataSourceFindAllDbType } from '@api/dataSource'

export default {
  addNum({ commit }) {
    commit(types.ADD_NUM)
  },
  subtractNum({ commit }) {
    commit(types.SUBTRACT_NUM)
  },
  async fetchDbTypes({ commit }) {
    let data = await ApiDataSourceFindAllDbType()
    console.log(data)
  }
}
