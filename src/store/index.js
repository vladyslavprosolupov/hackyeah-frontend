import Vue from 'vue'
import Vuex from 'vuex'

import animation from './modules/animation'
import option from './modules/option'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    animation,
    option
  }
})
