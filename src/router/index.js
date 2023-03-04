import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('../layouts/LayoutLogin.vue'),
      children: [
        {
          path: '/signup',
          component: () => import('../views/LoginView.vue')
        },
      ]
    },
    {
      path: '/',
      name: 'home',
      component: LoginView
    }
  ]
})

export default router
