// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routes'
// import VueMaterial from 'vue-material'
import Vuetify from 'vuetify'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})
Vue.config.productionTip = false

import 'bootstrap-grid-only/bootstrap.css'
// import 'vue-material/dist/vue-material.css'
import 'vuetify/dist/vuetify.min.css'
import './assets/css/style.css'

// Vue.use(VueMaterial)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
