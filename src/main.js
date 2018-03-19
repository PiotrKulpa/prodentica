import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Aboutus from './Aboutus.vue'
import Cases from './Cases.vue'
import Gallery from './Gallery.vue'
import Team from './Team.vue'
import Contact from './Contact.vue'
import Services from './Services.vue'
import VueRouter from 'vue-router'
import FA from 'font-awesome/css/font-awesome.css'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/onas', component: Aboutus},
  {path: '/uslugi', component: Services},
  {path: '/przypadki', component: Cases},
  {path: '/galeria', component: Gallery},
  {path: '/zespol', component: Team},
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
