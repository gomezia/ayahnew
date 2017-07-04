import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const myState = {
  logo: {
    text: 'Ayah v2',
    image: 'data:image/png;base64,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'
  }
}

const myGetters = {
  getLogo: state => state.logo
}

export default new Vuex.Store({
  state: myState,
  getters: myGetters
})
