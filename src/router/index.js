import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/#',
    name: 'Hijo',
    component: () => import('../views/Hijo.vue')
  },
  {
    path: '/vuex',
    name: 'VuexPadre',
    component: () => import('../views/VuexPadre.vue')
  },
  {
    path: '/#',
    name: 'VuexHijo',
    component: () => import('../views/VuexHijo.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('../views/Axios.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
