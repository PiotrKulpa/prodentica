import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Aboutus from './Aboutus.vue'
import Cases from './Cases.vue'
import Gallery from './Gallery.vue'
import Contact from './Contact.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/onas', component: Aboutus},
  {path: '/przypadki', component: Cases},
  {path: '/galeria', component: Gallery},
  {path: '/kontakt', component: Contact},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
