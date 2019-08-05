import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchbar: ""
  },
  mutations: {
    updateSearchbar(state, string) {
      state.searchbar = string;
    }
  },
  actions: {}
});
