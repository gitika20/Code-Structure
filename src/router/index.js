import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import login from './../components/login/login.vue'
import navbar from './../components/navbar/navbar.vue'
import profile from './../components/profile/profile.vue'
import jumbotro from './../components/jumbotro/jumbotro.vue'
0



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
      path: '/jumbotro',
      name: 'jumbotro',
      component: jumbotro

    }
    
   
  ]
})
