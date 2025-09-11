import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VocabList from '../views/VocabularyList.vue'
import Lessons from '../views/Lessons.vue'
import Quiz from '../views/VocabularyQuiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vocabulary/:opt/:page',
      name: 'vocabulary-level',
      component: VocabList
    },
    {
      path: '/vocabulary/:opt/:word/:page',
      name: 'vocabulary-level',
      component: VocabList
    },
    {
      path: '/lessons',
      name: 'lessons-level',
      component: Lessons
    },
    /* {
      path: '/quiz/',
      name: 'quiz',
      component: Quiz
    }, */
    {
      // path: "*",
      path: '/:catchAll(.*)',
      name: 'all',
      component: HomeView
    }
  ]
})

export default router
