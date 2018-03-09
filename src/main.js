// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Vuetify);
 Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

// export const HTTP = axios.create({
//   baseURL: `http://jsonplaceholder.typicode.com/`,
//  // headers: {
//   //   Authorization: 'Bearer {token}'
//   // }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
