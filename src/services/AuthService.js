import axios from 'axios';

export default {

  login(user) {
    return axios.post('/login', user)
  },

  register(user) {
    return axios.post('/register', user)
  },

  updatePassword(user) {
    return axios.put('/login/change_password', user)
  }

}
