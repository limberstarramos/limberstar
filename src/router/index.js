import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Servicios from '../views/Servicios.vue'
import Contacto from '../views/Contacto.vue'
import Detalle_servicio from '../views/Detalle_servicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/Sobre.vue')
  },
  {
    path: '/servicios',
    name:'Servicios',
    component: Servicios
  },
  {
    path:'/contacto',
    name:'Contacto',
    component:Contacto
  },
  {
    path:'/detalle_servicio',
    name:'Detalle_servicio',
    component:Detalle_servicio
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
