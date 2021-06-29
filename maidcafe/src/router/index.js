import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Drinks from '../views/Drinks.vue'
import Foods from '../views/Foods.vue'
import FoodDetails from '../views/FoodDetails.vue'
import DrinkDetails from '../views/DrinkDetails.vue'
import Buckets from '../views/Buckets.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: Drinks
  },
  {
    path: '/foods/:id',
    name: 'FoodDetails',
    component: FoodDetails
  },
  {
    path: '/drinks/:id',
    name: 'DrinkDetails',
    component: DrinkDetails
  },
  {
    path: '/buckets',
    name: 'Buckets',
    component: Buckets
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
