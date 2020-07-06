// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import zswl_ui from './components'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(zswl_ui)

require('./assets/css/normalize.less') 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
