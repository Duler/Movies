

import { HttpServices } from './HttpService'



class MoviesServices extends HttpServices {    
    
    getAll() {
        return this.axios.get('/movies')
    }
}


export const moviesService = new MoviesServices()