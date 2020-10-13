import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tem from '../views/Tem.vue'
import Click from '../views/Click.vue'
import Hide from '../views/Hide.vue'
import Parameter from '../views/Parameter'
import ClickChangeCollor from '../views/ClickChangeCollor'
import MathRandom from '../views/MathRandom'
import Button from '../views/Button'
import Inputnumbg from '../views/Inputnumbg'
import Vfor from '../views/Vfor'
import Filter from '../views/Filter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/tem',
    name: 'Tem',
    component: Tem
  },
  {
    path: '/click',
    name: '/Click',
    component: Click
  },
  {
    path: '/hide',
    name: '/Hide',
    component: Hide
  },
  {
    path: '/param',
    name: '/Param',
    component: Parameter
  },
  {
    path: '/clickchangecollor',
    name: '/Cliclchangecollor',
    component: ClickChangeCollor
  },
  {
    path: '/mathrandom',
    name: '/Mathrandom',
    component: MathRandom
  },
  {
    path: '/button',
    name: '/Button',
    component: Button
  },
  {
    path: '/inputnumbg',
    name: '/Inputnumbg',
    component: Inputnumbg
  },
  {
    path: '/vfor',
    name: '/Vfor',
    component: Vfor
  },
  {
    path: '/filter',
    name: '/Filter',
    component: Filter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
