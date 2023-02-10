import axios from 'axios';



export default{

    //copied from petService for reference
    
    getAllPetImages(id){
        return axios.get(`/petImage/${id}`)
    },

    addPetImage(id, petImage){
        return axios.post(`petImage/add/${id}`, petImage)
    },

    addPet(pet){
        return axios.post('/pets/add', pet)
    },

    updatePet(id, pet){
        return axios.put(`/pets/${id}/edit`, pet)
    }
}
