
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'
class MoviesServices {
    constructor() {
        this.configureAxios(
            BASE_URL,
            {
                accept: 'application/json',
                authoriyation: `Bearer ${localStorage.getItem('token')}`
            }
        )
    }

    configureAxios(baseUrl, headers = {}) {
        axios.defaults.baseURL = baseUrl
        Object.assign(
            axios.defaults.headers.common,
            headers
        )
        
    }
}

export const moviesServices = new MoviesServices()