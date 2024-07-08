<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from '../stores/movie'
import { useRoute } from 'vue-router'

const route = useRoute()
//console.log(route);
const MovieStore = useMovieStore()

onMounted(() => {
    MovieStore.getSingleMovies(route.params.id)
})

// function goHome() {
//     router.push({ name: 'home', params: { username: 'erina' } })
// }
</script>

<template>

    <div class="container mx-auto  pt-10 flex  lg:w-3/5 ">
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <div class=" flex-1">
                <figure>
                    <img class="rounded-lg" :src="MovieStore.singleMovie?.Poster" alt="Picture Unabailabe " />
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



</template>