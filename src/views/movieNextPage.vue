<script setup>
import pagenation from '../components/pagenation.vue'
import { useMovieStore } from '../stores/movie'
const Naxtstore = useMovieStore()

</script>

<template>
    <div class="container p-5 mx-auto  lg:w-2/3" v-for="nextMovie in Naxtstore.pageOneMovie" :key="nextMovie.imdbID">

        <div class=" flex flex-col md:flex-row card card-side bg-base-100 shadow-xl">
            <div>
                <figure>
                    <img :src="nextMovie.Poster" alt="Movie" />
                </figure>
            </div>
            <div class="card-body">
                <h2 class="card-title">{{ nextMovie.Title }}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>

    </div>
    <pagenation />
</template>