import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as api from './api'
import './mock/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
