import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import movieNextPage from '../views/movieNextPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movie/:id',
      name: 'movie-details',
      component: MovieView
    },
    {
      path: '/movie',
      name: 'movieNextPage',
      component: movieNextPage
    },
  ]
})

export default router
