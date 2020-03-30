import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Users: [],
  },
  mutations: {
    setUsers(state,item){
      state.Users.push(item)
    }
  },
  actions: {
  },
  modules: {
  }
})
