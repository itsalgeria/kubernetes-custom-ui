import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import App from './App'
import Store from './store'

Vue.config.productionTip = false

const store = Store()

Vue.use(BootstrapVue)
Vue.use(VueProgressBar, { color: '#3371e3', failedColor: 'red', thickness: '2px' })

axios.defaults.baseURL = process.env.API_URL || '/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
})
