<template>
  <div class="page">
    <div id="container">
      <div id="titleDiv">
        <h1>Update Pet Listing</h1>
      </div>
      <div id="bottomLine"></div>
      <form v-on:submit.prevent="updatePetDetails">
        <div class="form">
          <div class="row">
            <div>
              <label for="name">Name:</label>
              <input type="text" v-model="pet.petName" />
            </div>
            <div>
              <label for="type">Type:</label>
              <input type="text" v-model="pet.type" />
            </div>
          </div>
          <div class="row">
            <div>
              <label for="breed">Breed:</label>
              <input type="text" v-model="pet.breed" />
            </div>
            <div>
              <label for="gender">Gender:</label>
              <input type="text" v-model="pet.gender" />
            </div>
          </div>
          <div class="row">
            <div>
              <label for="weight">Weight(lbs):</label>
              <input type="text" v-model="pet.weight" />
            </div>
            <div>
              <label for="age">Age:</label>
              <input type="text" v-model="pet.age" />
            </div>
          </div>
          <div id="imgUploadDiv">
            <div>
              <label for="petImage">Image URL:</label>
              <input type="text" name="petImage" v-model="pet.petImage" />
            </div>
            <button id="upload" @click.prevent="uploadImage">
              Upload Image
            </button>
          </div>
          <div id="description">
            <label for="description">Description:</label>
            <textarea
              name="description"
              rows="5"
              v-model="pet.description"
            ></textarea>
          </div>
          <div id="adoptedDiv">
            <label for="adopted">Adopted?</label>
            <div>
              <input
                id="true"
                type="radio"
                value="true"
                v-model="pet.adopted"
              />
              <label for="true">True</label>
            </div>
            <div>
              <input
                id="false"
                type="radio"
                value="false"
                v-model="pet.adopted"
              />
              <label for="false">False</label>
            </div>
          </div>
          <button class="btn" type="submit">Save Updates</button>
          <button class="btn cancel" v-on:click="cancel">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PetService from "../services/PetService";

export default {
  name: "update-pet",
  data() {
    return {
      pet: {
        petId: "",
        petName: "",
        petImage: "",
        type: "",
        age: "",
        gender: "",
        breed: "",
        weight: "",
        description: "",
        adopted: "",
        adopterId: 0,
      },
      petImage: {
        imageId: "",
        petImages: [],
        isPrimary: false,
        petId: "",
      },
    };
  },
  methods: {
    updatePetDetails() {
      PetService.updatePet(this.pet.petId, this.pet).then((response) => {
        if (response.status === 202) {
          alert("Updates Successful!");
          this.$router.push("/pets");
        }
      });
    },
    cancel() {
      this.$router.push("/pets");
    },
    uploadImage() {
      this.myWidget.open();
    },
  },
  mounted() {
    this.myWidget = window.cloudinary.createUploadWidget(
      {
        // Insert your cloud name and presets here,
        // see the documentation
        cloudName: "difcq8eki",
        uploadPreset: "fjc27lbt",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          console.log("Image URL: " + result.info.url);
          this.pet.petImage = result.info.url;
        }
      }
    );
  },
  created() {
    // PetService.getPetById(this.petId).then((response) => {
    //   this.$store.commit("SET_ACTIVE_PET", response.data);
    // });
    this.pet = this.$store.state.activePet;
    if (Object.keys(this.$store.state.activePet).length == 0) {
      alert("Could Not Find Listing");
    }
  },
};
</script>

<style scoped>
#container {
  width: 500px;
  margin: auto;
}

.page {
  background-image: url(../assets/editPet.jpg);
}

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

.form {
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(1.5px);
}

.row,
#imgUploadDiv {
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

#description {
  display: flex;
  flex-direction: column;
}

#imgUploadDiv {
  display: flex;
}

#upload {
  margin-left: 35px;
  width: 100%;
}

#adoptedDiv {
  margin-top: 8px;
  display: flex;
  /* justify-content: space-around; */
}

#adoptedDiv div {
  margin-left: 30px;
}

#adoptedDiv input {
  margin-right: 5px;
}

textarea[name="description"] {
  resize: none;
}

.cancel:hover {
  background-color: #fdc2b8;
  cursor: pointer;
}
</style>
