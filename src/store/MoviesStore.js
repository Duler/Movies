
import {moviesService} from './../services/MoviesService'
export const MoviesStore = {
    
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
            console.log('ssss') // eslint-disable-line
            try {
              const responce = await moviesService.getAll()
              console.log(responce) // eslint-disable-line
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
      }
