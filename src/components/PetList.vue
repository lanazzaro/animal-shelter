<template>
  <div class="pet-list">
    <h1>Adoptable Pets</h1>
    <div id="bottomLine"></div>
    <div class="wrapper">
      <div id="sidebar">
        <div>
          <label for="pet type">Species:</label>
          <input name="pet type" type="text" v-model="filter.type" />
        </div>
        <div>
          <label for="breed">Breed:</label>
          <input name="breed" type="text" v-model="filter.breed" />
        </div>
        <div>
          <label for="search gender">Gender:</label>
          <select v-model="filter.gender" name="search gender">
            <option value>Show All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label for="weight">Weight(lbs):</label>
          <select v-model="filter.weight" name="search weight">
            <option value>Show All</option>
            <option value="<10">under 10</option>
            <option value="10-20">10-20</option>
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
            <option value="50-60">50-60</option>
            <option value="60-70">60-70</option>
            <option value="70">70+</option>
          </select>
        </div>
        <div>
          <label for="age">Age:</label>
          <select name="age" v-model="filter.age">
            <option value>Show All</option>
            <option value="0-.99">under 1</option>
            <option value="1-5">1-5</option>
            <option value="5-9">5-9</option>
            <option value="10+">10+</option>
          </select>
        </div>

        <router-link v-bind:to="{ name: 'newPetForm' }">
          <button class="btn" v-if="$store.state.token != ''">Add a Pet</button>
        </router-link>
      </div>
      <div id="sideBorder"></div>

      <div id="pet-container">
        <pet-details
          v-bind:pet="pet"
          v-for="pet in filteredPets"
          v-bind:key="pet.petId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PetDetails from "../components/PetDetails.vue";
import PetService from "../services/PetService.js";

export default {
  name: "pet-list",
  components: {
    PetDetails,
  },
  data() {
    return {
      pets: [],
      filter: {
        type: "",
        breed: "",
        gender: "",
        age: "",
        weight: "",
      },
    };
  },
  created() {
    PetService.getAdoptablePets().then((response) => {
      this.pets = response.data;
      this.$store.commit("SET_PETS", this.pets);
    });
  },
  computed: {
    filteredPets() {
      let filteredPetsList = this.pets;
      if (this.filter.type != "") {
        filteredPetsList = filteredPetsList.filter((pet) =>
          pet.type.toLowerCase().includes(this.filter.type.toLowerCase())
        );
      }
      if (this.filter.breed != "") {
        filteredPetsList = filteredPetsList.filter((pet) =>
          pet.breed.toLowerCase().includes(this.filter.breed.toLowerCase())
        );
      }
      if (this.filter.gender != "") {
        filteredPetsList = filteredPetsList.filter(
          (pet) => pet.gender.toLowerCase() == this.filter.gender.toLowerCase()
        );
      }
      if (this.filter.age != "") {
        filteredPetsList = filteredPetsList.filter(
          (pet) =>
            (pet.age >= parseFloat(this.filter.age.substring(0, 1)) &&
              pet.age <= this.filter.age.substring(2)) ||
            pet.age > this.filter.age.substring(0, 2)
        );
      }
      if (this.filter.weight != "") {
        filteredPetsList = filteredPetsList.filter(
          (pet) =>
            (pet.weight >= parseInt(this.filter.weight.substring(0, 2)) &&
              pet.weight <= this.filter.weight.substring(3)) ||
            (this.filter.weight.length === 2 &&
              pet.weight > this.filter.weight.substring(0, 2)) ||
            pet.weight < this.filter.weight.substring(1)
        );
      }
      return filteredPetsList;
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0px 0 10px 0;
  margin-bottom: 5px;
}

.wrapper {
  display: flex;
}

#pet-container {
  margin-right: 40px;
  width: 100%;
}

#sidebar {
  height: 25vh;
  margin: 0 30px 0 30px;
  position: sticky;
  top: 20vh;
  border-radius: 5px;
  padding: 2px;
}

#sidebar div {
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
  margin-bottom: 10px;
}

#sideBorder {
  height: 60vh;
  border-right: 2px solid #7acaed;
  margin-right: 30px;
  position: sticky;
  top: 20vh;
}

.btn {
  background-color: #20a7e1;
  color: rgb(245, 245, 245);
  width: 100%;
  padding: 18px 0px;
}

.btn:hover {
  background-color: #1a92c5;
  transition: 0.3s;
  cursor: pointer;
}

#pet-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
