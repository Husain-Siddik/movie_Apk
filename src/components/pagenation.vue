<script setup>
import { useMovieStore } from '../stores/movie'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const moviestore = useMovieStore()
const route = useRoute()
// function clicked(e) {
//     console.log(e.terget.value)
// }
const countModel = ref()

function buttonValue(e) {
    const namber = e.target.value
    // console.log(namber)
    moviestore.movies1 = namber
}
function call() {
    console.log("guydfuig");
}

</script>


<template>

    <div class="mx-auto flex items-center justify-center w-4/5 lg:w-1/5">
        <div class="join " @click="moviestore.searchOnePageMovies()">
            <router-link :to="{ name: 'movieNextPage' }">
                <input class="join-item btn btn-square" type="button" name="options" :value="2" checked="checked"
                    v-on:click="buttonValue($event)" />
                <input class="join-item btn btn-square" type="radio" name="options" aria-label="3" :value="3"
                    v-on:click="buttonValue($event)" />
                <input class="join-item btn btn-square" type="radio" name="options" aria-label="4" :value="4"
                    v-on:click="buttonValue($event)" />
                <input class="join-item btn btn-square" type="radio" name="options" aria-label="5" :value="5"
                    v-on:click="buttonValue($event)" />

            </router-link>
        </div>
    </div>
</template>