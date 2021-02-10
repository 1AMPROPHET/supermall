import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/home')
const Explore = () => import('../views/explore/explore')
const Market = () => import('../views/market/market')
const Profile = () => import('../views/profile/profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/explore',
    component: Explore
  },
  {
    path: '/market',
    component: Market
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
