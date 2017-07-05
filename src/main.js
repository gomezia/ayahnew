// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routes'
import Vuetify from 'vuetify'
import VueQuillEditor from 'vue-quill-editor'
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

Vue.use(Vuetify)
Vue.use(VueQuillEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
