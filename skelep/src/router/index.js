import { createRouter, createWebHistory } from 'vue-router'
import Front from "../views/Front.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front
    },
   
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
  ]
})

export default router

