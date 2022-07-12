import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

process.env.ApiUrl= "http://localhost:3000/api/" 

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/participante',
    name: 'Participante',
    component: () => import(/* webpackChunkName: "about" */ '../views/Participante.vue')
  },
  {
    path: '/estadisticas',
    name: 'estadisticas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Estadisticas.vue')
  },
  {
    path: '/certificado/:id',
    name: 'certificado',

    component: () => import(/* webpackChunkName: "about" */ '../views/Certificado.vue')
  },
  {
    path: '/certificadopublico/id',
    name: 'certificadopublico',
    component: () => import(/* webpackChunkName: "about" */ '../views/CertificadoPublico.vue')
  },
  {
    path: '/carnetafiliacioncnb/id',
    name: 'carnetafiliacioncnb',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarnetAfiliacion.vue')
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
   {
    path: '/cerrar',
    name: 'cerrar',
    component: () => import( '../views/Cerrar.vue')
  } ,
  /* {
   path: '/prueba',
   name: 'prueba',
   component: () => import( '../views/Prueba.vue')
 }  */



]



Vue.config.productionTip = false;

/* new Vue({
  router,
  render: h => h(App)
}).$mount("#app"); */


const router = new VueRouter({
  routes
})

export default router
