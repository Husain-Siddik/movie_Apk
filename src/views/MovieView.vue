<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '../stores/movie'
import { useRoute } from 'vue-router'


const route = useRoute()
//console.log(route);
const MovieStore = useMovieStore()


// for loeader use
let componentsReady = false
onMounted(() => {
    MovieStore.getSingleMovies(route.params.id)
})

setTimeout(() => {
    componentsReady = true
}, "1000");

// function goHome() {
//     router.push({ name: 'home',})
// }

//  v-if="!componentsReady"
</script>

<template>
    <!-- loder part -->
    <div v-if="MovieStore.loading">
        <div class=" h-screen flex items-center justify-center">
            <span class="loading loading-spinner loading-lg"></span>
        </div>
    </div>
    <!-- loder part end -->


    <div class=" w-auto h-3/4 mx-auto">
        <div class="container  mx-auto pt-10 flex  lg:w-3/5  ">
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <div class=" flex-1 p-8">
                    <figure class="">
                        <img class="rounded-lg bg-cover" :src="MovieStore.singleMovie?.Poster"
                            alt="Picture Unabailabe " />
                    </figure>
                </div>

                <div class="card-body flex-1">
                    <h2 class="card-title"> Movie name :{{ MovieStore.singleMovie?.Title }}</h2>
                    <p>Genre : {{ MovieStore.singleMovie?.Genre }}</p>
                    <p class="text-2xl pb-2"> plot : {{ MovieStore.singleMovie?.Plot }}</p>
                    <p class="text-xl"> Writer : {{ MovieStore.singleMovie?.Writer }}</p>
                    <p class="text-2xl pb-2"> Actors : {{ MovieStore.singleMovie?.Actors }}</p>

                    <div class="card-actions justify-end">
                        <router-link to="/">
                            <button class="btn btn-error "> Back</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>




</template>