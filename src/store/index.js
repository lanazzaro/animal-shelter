import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    activePet: {},
    activeVolunteer: {},
    activeImage: {}, // added this
    pets: [],
    petImages: [], // added this
    volunteers: [],
  },
    getters: {
      pet(state) {
        return state.pets.find(p => p.petId == state.activePet);
      },
      // added this
      petImages(state){
        return state.petImages.find(p => p.imageId == state.activeImage)
      },
      volunteer(state){
        return state.volunteers.find(p => p.applicationId == state.activeVolunteer);
      }
  },
  mutations: {
    SET_PETS(state, payload){
      state.pets=payload;
    },
    // added this
    SET_PET_IMAGES(state, payload){
      state.petImages = payload;
    },
    SET_VOLUNTEERS(state, payload){
      state.volunteers=payload;
    },
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    SET_ACTIVE_PET(state, petId){
      state.activePet = petId;
    },
    SET_ACTIVE_VOLUNTEER(state, applicationId){
      state.activeVolunteer = applicationId;
    },
    // added this
    SET_ACTIVE_IMAGE(state, imageId){
      state.activeImage = imageId;
    },
    
  }
})
