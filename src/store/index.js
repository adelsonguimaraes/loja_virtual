import Vue from 'vue'
import Vuex from 'vuex'
import produtos from  './modules/produtos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sub_view: ''
  },
  getters: {
    sub_view: state => state.sub_view
  },
  mutations: {
    setSubview: (state, sub) => state.sub_view = sub
  },
  actions: {
  },
  modules: {
    produtos
  }
})
