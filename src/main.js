import Vue from 'vue'
import Home from './components/Home.vue'
import store from './store/store'
import { router } from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(Home),
}).$mount('#app')
