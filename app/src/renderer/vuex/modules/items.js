import * as types from '../mutation-types'

const state = {
  numbers: []
}

const mutations = {
  [types.ADD_ITEM_NUMBERS] (state, item) {
    state.numbers.push(item)
  },
  [types.EMPTY_ITEM_NUMBERS] (state) {
    state.numbers.length = 0
  }
}

export default {
  state,
  mutations
}
