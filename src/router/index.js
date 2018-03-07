import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import login from './../components/login/login.vue'
import navbar from './../components/navbar/navbar.vue'





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
    }
    
   
  ]
})
