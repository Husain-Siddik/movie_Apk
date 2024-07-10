import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('Movie', {
  state: () => ({
    defalt: ref('Superman'),
    heroContant: ref([]),
    search: ref(''),
    movies: ref([]),
    singleMovie: null,
    movies1: ref([]),
    pageOneMovie: ref([]),
    loading: ref("loading")

  }),

  getters: {
    //   in this part aroow function can be write 
  },

  actions: {

    // when page loded 

    async defaultMovie() {
      if (this.search == "") {
        const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=87ec46ac&s=Superman&page=${this.movies1}`)

        this.movies = data.Search
        // for pagination 
        this.pageOneMovie = data.Search
        // for herocard section 
        this.heroContant = data.Search[0]

        // console.log(data.Search[0])
        console.log(this.heroContant);


      }
    },


    /**
     * When user search movie
     */

    async searchMovies() {

      if (this.search != "") {
        const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=87ec46ac&s=${this.search}`)

        this.movies = data.Search
      } else {
        alert("Plese Enter a Movie name")
      }
    },

    // this is details part

    async getSingleMovies(id) {

      const { data } = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=87ec46ac&plot=full`)
      //  console.log(id);
      this.singleMovie = data
      console.log(data);

      if (data) {
        this.loading = ""
        console.log(this.loading);
      }

    },


    //  pagenetion  set kora


    async searchOnePageMovies() {
      // movies search with page namber
      if (this.search != "" && this.search !== 'null') {
        const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=87ec46ac&s=${this.search}&page=${this.movies1}`)

        this.pageOneMovie = data.Search

      }

    },





  },
})