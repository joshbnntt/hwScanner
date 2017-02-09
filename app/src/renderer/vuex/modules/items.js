import * as types from '../mutation-types'

const state = {
  items: []
}

const mutations = {
  [types.ADD_ITEM_NUMBERS] (state, item) {
    state.items.push(item)
  },
  [types.EMPTY_ITEM_NUMBERS] (state) {
    state.items.length = 0
  }
}

export default {
  state,
  mutations
}
