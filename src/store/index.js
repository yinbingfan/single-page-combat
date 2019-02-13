import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    locales: ['zh','en','ja','ko'],
    locale: 'en',
    menu: 'home',
    details:{},
    banner:{},
    topFive:{},
    recentlyList:{},
    findDapps:{},
    categoryList:{},
    subscribe:'',
    detailsIsShow: true
  },
  mutations,
  getters,
  actions
})

export default store
