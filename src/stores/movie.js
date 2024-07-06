import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useMovieStore = defineStore('Movie', {
  state: () => ({
    search: ref(null),
    movies: ref([]),

  }),

  getters: {

  },

  actions: {
    async searchMovies() {
      if (this.search != "") {
        const { data } = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=87ec46ac&s=${this.search}`)

        this.movies = data.Search
      }
    }
  },
})
