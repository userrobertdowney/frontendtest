import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Roll from '../views/Roll.vue'
import Prepare from '../views/Prepare.vue'
import Tip from '../views/Tip.vue'
import Carousel from '../views/Carousel.vue'
import Poster from '../views/Poster.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/roll',
    name: 'Roll',
    component: Roll,
  },
  {
    path: '/prepare',
    name: 'Prepare',
    component: Prepare,
  },
  {
    path: '/tip',
    name: 'Tip',
    component: Tip,
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: Carousel,
  },
  {
    path: '/poster',
    name: 'Poster',
    component: Poster,
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  routes,
})

export default router
