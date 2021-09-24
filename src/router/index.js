import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '',
    name:"login",
    component: () => import('@/views/Login')
  },
  { 
    path: '/dashboard',
    name:"dashborad",
    component: () => import('@/views/Dashboard')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

