import { createRouter, createWebHistory } from 'vue-router'
import Front from '../views/Front.vue'
import Projects from '../views/Projects.vue'
import CV from '../views/CV.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/CV',
      name: 'CV',
      component: CV
    },
  ]
})

export default router
