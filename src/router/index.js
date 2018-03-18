import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import login from './../components/login/login.vue'
import navbar from './../components/navbar/navbar.vue'
import profile from './../components/profile/profile.vue'
import transport from './../components/transport/transport.vue'
import hostel from './../components/hostel/hostel.vue'
import feedback from './../components/feedback/feedback.vue'

Vue.use(Router)

var validator = {
  beforeEnter: (from, to, next) => {
    var x = prompt("Pass:");
    // if(isLoggedIn)(next();)else next('/login');
    if (x == '123') next(); else next('/login');
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      beforeEnter:(from,to,next)=>{
        // if(isLoggedIn)next('/profile');
        // else next();
        next();
      }
    },
    {
      path:'/navbar',
      name:'navbar',
      component:navbar
    },
    {
      path:'/profile',
      name:'profile',
      component:profile,
      ...validator
    },
    {
      path: '/transport',
      name: 'transport',
      component: transport,
      ...validator
    },
    {
      path: '/hostel',
      name: 'hostel',
      component: hostel,
      ...validator
    },
     {
       path: '/feedback',
       name: 'feedback',
       component: feedback,
      ...validator
     }
  ]
})
