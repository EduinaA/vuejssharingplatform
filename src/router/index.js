import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueCharts from 'vue-charts'
import SocialSharing from 'vue-social-sharing'
import Calendar from 'vue-calendar-picker'
import Landing from '@/templates/landing'
import Dashboard from '@/components/dashboard'
import Connect from '@/components/connect'
import Create from '@/components/create'
import Social from '@/components/social'
import Settings from '@/components/settings'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueCharts)
Vue.use(SocialSharing)
Vue.use(Calendar)

export default new Router({
  routes: [
    { path: '/', name: 'Landing', component: Landing },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/connect', name: 'Connect', component: Connect },
    { path: '/create', name: 'Create', component: Create },
    { path: '/social', name: 'Social', component: Social },
    { path: '/settings', name: 'Settings', component: Settings }
  ]
})
