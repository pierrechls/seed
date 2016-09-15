export const decrementCounter = function ({ dispatch, state }) {
  dispatch('DECREMENT', 1)
}

export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
}

export const translate = function ({ dispatch, state }, lang) {
  dispatch('TRANSLATE', lang)
}
