import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import login from './../components/login/login.vue'
import navbar from './../components/navbar/navbar.vue'
import profile from './../components/profile/profile.vue'
import transport from './../components/transport/transport.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/navbar',
      name:'navbar',
      component:navbar
    },
    {
      path:'/profile',
      name:'profile',
      component:profile
    },
    {
      path: '/transport',
      name: 'transport',
      component: transport

    }
    
   
  ]
})
