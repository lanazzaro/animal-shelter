<template>
  <!-- <router-link v-bind:to="{name: 'petDetailsView', params: { petId: pet.petId }}"> -->
  <div class="container">
    <router-link
      v-bind:to="{ name: 'petDetailsView', params: { petId: pet.petId } }"
    >
      <div class="card">
        <img :src="pet.petImage" />
        <div class="cardText">
          <h2>{{ pet.petName }}</h2>
          <p>Species: {{ pet.type }}</p>
          <p>Breed: {{ pet.breed }}</p>
        </div>
        <!-- <router-link v-bind:to="{name: 'petDetailsView', params: { petId: pet.petId }}"> -->
        <!-- <button class='learnMore' v-bind:to="{name: 'petDetailsView', params: { petId: pet.petId }}">Learn More</button><br> -->
        <!-- </router-link>  -->

        <!-- <router-link v-bind:to="{name: 'updatePet', params: {petId: pet.petId}}">
        <button class='update' v-if="$store.state.token != ''">Edit This Listing</button>
        </router-link> -->
      </div>
    </router-link>
    <div id="editHolder">
      <a id="addImages" v-on:click="addImage" v-if="$store.state.token != ''"
        >Add Images</a
      >
      <a id="update" v-on:click="setUpEdit" v-if="$store.state.token != ''"
        >Edit</a
      >
      <!-- <router-link v-bind:to="{name: 'AddPhotosView', params: {petId: pet.petId}}">Add Photos</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "pet-details",
  props: ["pet"],
  methods: {
    setUpEdit() {
      this.$store.commit("SET_ACTIVE_PET", this.pet);
      this.$router.push({
        name: "updatePet",
        params: { petId: this.pet.petId },
      });
    },
    addImage() {
      this.$store.commit("SET_ACTIVE_PET", this.pet);
      this.$router.push({
        name: "AddPhotosView",
        params: { petId: this.pet.petId },
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 3%;
}

.card {
  margin: 30px 0 10px 0;
  width: 300px;
  overflow: hidden;
  box-shadow: 2px 4px 4px rgb(204, 204, 204);
}

.card:hover {
  background-color: #c5e8f7;
  transition: 0.2s;
}

img {
  display: block;
  margin: auto;
  height: 250px;
  object-fit: contain;
}

.cardText {
  margin: 5px;
}

.learnMore {
  background-color: rgba(255, 255, 255);
  border: none;
  color: black;
  font-size: 16px;
  border-radius: 5px;
}

h2 {
  margin-bottom: 3px;
  color: #0f4f6a;
}

a {
  color: black;
}

#editHolder {
  display: flex;
  justify-content: space-between;
}

#update {
  text-align: right;
  margin-right: 10px;
}

#update:hover,
#addImages:hover {
  cursor: pointer;
}
</style>
