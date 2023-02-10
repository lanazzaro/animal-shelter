import axios from 'axios';


export default{
    addAdoptionRequest(petId, adopter){
        console.log(adopter)
        return axios.post(`/pets/${petId}/adopt`, adopter)
    },
    viewAdoptionApplications(){
        return axios.get('/adoption_applications')
    },
    // ?? updateAdoptionStatus(id, pet){
    //     return axios.put(`/pet/${id}`, pet)
    // }
}
