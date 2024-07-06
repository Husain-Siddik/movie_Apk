<script setup>
import { RouterLink } from 'vue-router'
import { useMovieStore } from '../stores/movie'
const movieStore = useMovieStore()
</script>

<template>
  <!-- search  -->

  <div class="flex justify-center items-center">
    <form @submit.prevent="movieStore.searchMovies">
      <input type="text" placeholder="search  here" class="input input-bordered input-inf "
        v-model="movieStore.search" />
      <button class=" pl-5">search</button>
    </form>
  </div>
  <main class="mx-auto p-5">

    <!--  move hero -->
    <router-link to="/movie/tt3896198">
      <div>
        <div class="hero bg-base-200 min-h-screen rounded-xl">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
              class="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 class="text-5xl font-bold">Guardians of the Galaxy Vol. 2</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">View Dtails</button>
            </div>
          </div>
        </div>
      </div>
    </router-link>

  </main>

  <!--  movie card  -->

  <div class=" container grid grid-cols-3 gap-2 mx-auto">

    <div class=" container  p-6 " v-for="moviecard in movieStore.movies " :key="moviecard.imdbID">
      <div class="card glass w-96 h-max">
        <figure class="h-96 pt-5">
          <!--  imge here -->
          <div class="  h-auto ">
            <img class="rounded-lg" :src="moviecard?.Poster" />
          </div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ moviecard?.Title }}</h2>
          <p> relaise year :{{ moviecard.Year }}</p>

          <div class="badge badge-primary badge-outline">{{ moviecard.Type }}</div>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">view detais!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
