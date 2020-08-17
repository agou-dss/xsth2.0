import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// import 'normalize.css/normalize.css'
// import './assets/css/zc-normalize.less'
import zcb_ui from './components'
Vue.use(zcb_ui);

require('./assets/css/normalize.less') 

import axios from 'axios';
Vue.prototype.$http = axios;

axios.defaults.baseURL =   process.env.API_HOST;

// console.log( process.env.API_HOST , process.env.NODE_ENV )
Vue.config.productionTip = false;

import message from "./components/component/index"
import { postcss } from 'postcss-url'
Vue.use(message);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
