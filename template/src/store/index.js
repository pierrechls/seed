import Vue from 'vue'
import Vuex from 'vuex'

import settings from 'lib/settings'

Vue.use(Vuex)

const state = {
  seed: settings.seed.default,
  lang: settings.lang
}

const mutations = {
  PLANT (state, amount) {
    state.seed = state.seed - amount
  },
  PULL_UP (state, amount) {
    state.seed = state.seed + amount
  },
  TRANSLATE (state, lang) {
    state.lang = lang
  }
}

const actions = {
  plant({commit}) {
    commit('PLANT', 1)
  },
  pullUp({commit}) {
    commit('PULL_UP', 1)
  },
  translate({commit}, lang) {
    commit('TRANSLATE', lang)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
