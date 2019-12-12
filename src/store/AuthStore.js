
import { authService } from './../services/AuthService'

export const AuthStore = {
    state: {
        token: localStorage.getItem('token'),
        errors: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setErrors(state, errors) {
            state.errors = errors
        }
    },
    actions: {
        async login(context, {email, password}) { 
            try {
                const responce = await authService.login(email, password)
                context.commit('setToken', responce.data.token)
                context.commit('setErrors', null)
                localStorage.setItem('token' , responce.data.token)
                return responce
            } catch(exeption) {
                context.commit('setErrors', exeption)
            }
            
        }
    },
    getters: {
        isUserAuthenticated(state) {
            return !!state.token
        }
    }
}