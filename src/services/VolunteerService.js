import axios from "axios";


export default{
    addVolunteer(volunteer){
        return axios.post('/volunteer/apply', volunteer)
    },
    viewVolunteer(){
        return axios.get('/volunteer/applications')
    },
    updateVolunteerStatus(id, volunteer){
        return axios.put(`/volunteer/${id}`, volunteer)
    },
    viewDirectory(){
        return axios.get('/volunteer/directory')
    },
    promoteToAdmin(id, volunteer){
        return axios.put(`/directory/${id}`, volunteer)
    }
}
