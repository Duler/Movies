

import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

export class HttpServices {
    constructor() {
        this.configureAxios(
            BASE_URL,
            {
                accept: 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        )
        this.axios = axios
    }

    configureAxios(baseUrl, headers = {}) {
        axios.defaults.baseURL = baseUrl
        Object.assign(
            axios.defaults.headers.common,
            headers
        )
        
    }
    
}


