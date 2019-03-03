import Vue from 'vue';
import Vuex from 'vuex';
import settings from 'settings/default.json';

Vue.use(Vuex);

const state = {
  seed: settings.seed.default,
  lang: settings.lang,
};

const mutations = {
  PLANT(state: any, amount: number) {
    state.seed = state.seed - amount;
  },
  PULL_UP(state: any, amount: number) {
    state.seed = state.seed + amount;
  },
  TRANSLATE(state: any, lang: string) {
    state.lang = lang;
  },
};

const actions = {
  plant({commit}: any) {
    commit('PLANT', 1);
  },
  pullUp({commit}: any) {
    commit('PULL_UP', 1);
  },
  translate({commit}: any, lang: string) {
    commit('TRANSLATE', lang);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
