import Vue from 'vue'
import App from './App'
import router from './router'
import Nav from './components/nav'

Vue.config.productionTip = false
Vue.component('nav-component', Nav)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
