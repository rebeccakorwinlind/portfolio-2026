import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kontakt from '../views/Kontakt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt,
    },
  ],
})

export default router
