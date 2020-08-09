import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import http from './http'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  http
}).$mount('#app')
