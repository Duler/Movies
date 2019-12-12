import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //todo:replace later with real implentation
  const ifUserLoggedIn = store.getters.isUserAuthenticated;
  if (!to.meta.guest && !ifUserLoggedIn) {
    return next({
      name: 'login'
    })
  }
  return next()

})

export default router
