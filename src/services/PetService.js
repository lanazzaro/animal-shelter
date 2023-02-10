import axios from 'axios';



export default{

    getAdoptablePets(){
        return axios.get('/pets')
    },

    getPetById(id){
        return axios.get(`/pets/${id}`)
    },

    addPet(pet){
        return axios.post('/pets/add', pet)
    },

    updatePet(id, pet){
        console.log(id)
        return axios.put(`/pets/${id}/edit`, pet)
    },

 }
