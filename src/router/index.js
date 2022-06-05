import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/ToDo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
