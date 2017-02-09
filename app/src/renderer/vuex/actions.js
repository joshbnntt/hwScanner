import * as types from './mutation-types'

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}

export const addItem = ({ commit }, item) => {
  commit(types.ADD_ITEM_NUMBERS, item)
}

export const emptyItems = ({ commit }) => {
  commit(types.EMPTY_ITEM_NUMBERS)
}
