
import {HttpServices} from './HttpService'
class AuthService extends HttpServices {
    login(email, password) { //eslint-disable-line
        //return this.axios.post('/login', {
         //   email,
        //    password
        //})
        return new Promise((resolve) => resolve({
            data: {
                token: 'my_token'
            }
        }))
    }
}

export const authService = new AuthService()