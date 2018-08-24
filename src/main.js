//TODO dodaj info o ciasteczkach

import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Aboutus from './Aboutus.vue'
import Cases from './Cases.vue'
import Gallery from './Gallery.vue'
import Team from './Team.vue'
import Contact from './Contact.vue'
import Services from './Services.vue'
import Publications from './Publications.vue'
import Equipment from './Equipment.vue'
import Certifications from './Certifications.vue'
import VueRouter from 'vue-router'
import FA from 'font-awesome/css/font-awesome.css'

Vue.use(VueRouter);

var routes = [
  {path: '/', component: Home},
  {path: '/onas', component: Aboutus},
  {path: '/uslugi', component: Services},
  {path: '/przypadki', component: Cases},
  {path: '/galeria', component: Gallery},
  {path: '/zespol', component: Team},
  {path: '/publikacje', component: Publications},
  {path: '/sprzet', component: Equipment},
  {path: '/certyfikaty', component: Certifications},
  {path: '/kontakt', component: Contact}
];

var router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
