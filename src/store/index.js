import Vue from 'vue'
import Vuex from 'vuex'

import { moviesServices } from './../services/MoviesServices'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    movies: [],
    searchTerm: ''
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    setSearchTerm(state, { term }) {
      state.searchTerm = term
    }
  },
  actions: {
    async fetchMovies(context) {
      try {
        const responce = await moviesServices.getAll()
        context.commit('setMovies', responce.data)
        return responce.data
      } catch (error) {
        console.log(error) // eslint-disable-line
      } //eslint-disable-line

    }
  },
  getters: {
    filterMovies(state) {
      return state.movies.filter((movie) => 
      movie.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }
  }
});

export default store
