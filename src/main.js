import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
// import Detalle from './components/Detalle.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/", components: Home},
  // {path: "/home", components: Home},
  // {path: "/detalle/:idserie", components: Detalle},
]

const router = new VueRouter({
  routes,
  mode:"history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
