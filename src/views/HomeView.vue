<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useMovieStore } from '../stores/movie'
const movieStore = useMovieStore()
import footerItem from '../components/footerItem.vue'
import pagenation from '../components/pagenation.vue'


onMounted(() => {
  movieStore.defaultMovie()
  // console.log(movieStore.movies);
})
</script>

<template>
  <!-- search  -->

  <div class="container flex justify-center items-center">
    <form @submit.prevent="movieStore.searchMovies">
      <input type="text" placeholder="search Movie  here" class="input input-bordered input-inf "
        v-model="movieStore.search" />
      <button class=" pl-5">search</button>
    </form>
  </div>
  <main class="container mx-auto p-5">

    <!--  move hero -->
    <!-- /////////////////////////////////////////////////////////////////////// -->
    <div>
      <div class="hero bg-base-200 min-h-screen rounded-xl">
        <!-- router here -->
        <router-link :to="{ name: 'movieNextPage' }">

          <div class="hero-content flex-col lg:flex-row">

            <div class="flex-1">
              <img :src="movieStore.heroContant?.Poster" />
            </div>

            <div class="flex-1">
              <h1 class="text-5xl font-bold">{{ movieStore.heroContant?.Title }}</h1>
              <p class="py-6">
                The general public is concerned over having Superman on their planet and letting the \"Dark Knight\ -
                Batman - pursue the streets of Gotham. While this is happening, a power-phobic Batman tries to attack
                Superman. Meanwhile, Superman tries to settle on a decision, and Lex Luthor, the criminal mastermind and
                millionaire, tries to use his own advantages to fight the "Man of Steel"
              </p>
              <button class="btn btn-primary" @click="movieStore.searchOnePageMovies">View Dtails</button>
            </div>

          </div>
          <!-- router End here -->
        </router-link>
      </div>
    </div>

  </main>


  <!--  movie card  -->

  <div class=" container grid  mx-auto grid-cols-1 lg:grid-cols-3   gap-1 lg:gap-2 ">
    <!-- card -->
    <div class="container p-6" v-for="moviecard in movieStore.movies " :key="moviecard.imdbID">
      <!-- first -->
      <router-link :to="{ name: 'movie-details', params: { id: moviecard.imdbID } }">
        <div class="card glass  lg:w-96 h-max">
          <figure class="h-96 pt-5">
            <!--  imge here -->
            <div class=" h-auto ">
              <img class="rounded-lg" :src="moviecard?.Poster" alt="Picture Unabailabe " />
            </div>

          </figure>
          <div class="card-body">
            <!-- {{ moviecard.imdbID }} -->
            <h2 class="card-title">{{ moviecard?.Title }}</h2>
            <p> relaise year :{{ moviecard.Year }}</p>

            <div class="badge badge-primary badge-outline">{{ moviecard.Type }}</div>
            <div class="card-actions justify-end">

              <!-- <button class="btn btn-primary">view detais!</button> -->
            </div>
          </div>
        </div>
        <!--  last-->
      </router-link>

    </div>
  </div>
  <pagenation />
  <footer-item />
</template>
