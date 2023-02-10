<template>
  <div class="page">
    <div id="titleDiv">
      <h1>Adoption Form</h1>
    </div>
    <div id="bottomLine"></div>
    <form action="form" v-on:submit.prevent="saveAdoptionRequest">
      <div class="form">
        <div class="row">
          <div>
            <label for="full-name">Full Name: </label>
            <input
              v-model="adopter.adopterName"
              name="full-name"
              type="text"
              required
            />
          </div>
          <div>
            <label for="email">Email: </label>
            <input v-model="adopter.email" name="email" type="email" required />
          </div>
        </div>
        <div class="row">
          <div>
            <label for="phoneNumber">Phone Number: </label>
            <input
              v-model="adopter.phoneNumber"
              name="phoneNumber"
              type="text"
              maxlength="10"
              minlength="10"
              required
            />
          </div>
          <div>
            <label for="city">City: </label>
            <input v-model="adopter.city" name="city" type="text" />
          </div>
        </div>
        <div class="row">
          <div>
            <label for="state">State: </label>
            <input
              v-model="adopter.state"
              name="state"
              type="text"
              maxlength="2"
              minlength="2"
            />
          </div>
          <div>
            <label for="zipcode">Zipcode: </label>
            <input v-model="adopter.zipcode" name="zipcode" type="text" maxlength="5"
              minlength="5"/>
          </div>
        </div>

        <div id="petsQuestion">
          <label for="anyPets">Do you currently have any pets? </label>
          <input v-model="adopter.anyPets" name="anyPets" type="checkbox" />
        </div>

        <div id="petsQuestion">
          <label for="numberOfPets"> If so, how many? </label>
          <input
            v-model="adopter.numberOfPets"
            name="numberOfPets"
            type="number"
          />
        </div>

        <button class="btn" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import AdoptionService from "../services/AdoptionService";
import PetService from "../services/PetService";
export default {
  data() {
    return {
      adopter: {
        adopterName: "",
        email: "",
        phoneNumber: "",
        city: "",
        state: "",
        zipcode: null,
        anyPets: false,
        numberOfPets: 0,
        approvalStatus: "Pending",
      },
      pet: {},
    };
  },
      created() {
        PetService.getPetById(this.$route.params.petId).then((response) =>{
            if(response.status == 200){
                this.pet = response.data;
            }
        })
    },
  methods: {
    saveAdoptionRequest() {
      console.log(this.$route.params.petId);
      AdoptionService.addAdoptionRequest(
        this.$route.params.petId,
        this.adopter
      ).then((response) => {
        if (response.status === 201) {
          alert("Thank you for applying to adopt this critter!");
          //  back to browse pets
          this.$router.push("/pets");
        }
      });
      this.resetForm();
    },
    resetForm() {
      this.adopter = {
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        state: "",
        zipcode: null,
        anyPets: false,
        numberOfPets: 0,
        approvalStatus: "Pending",
      };
    },
  },
};
</script>

<style scoped>
h1 {
  padding: 10px;
  margin: 102px 0 10px 0;
}

#titleDiv {
  margin: auto;
  backdrop-filter: blur(7px);
  width: 350px;
  border-radius: 7px;
}

.page {
  background-image: url(../assets/applyToAdopt.jpg);
}

.form {
  backdrop-filter: blur(1px);
  /* width: 500px; */
}

form div {
  margin-bottom: 4px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.row div {
  display: flex;
  flex-direction: column;
}

#petsQuestion {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input[type="number"] {
  padding: 14px 10px;
  height: 22px;
  width: 50px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 4px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.btn {
  width: 100%;
}
</style>
