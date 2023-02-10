<template>
  <div class="page">
    <div id="rightContainer">
      <div id="titleDiv">
        <h1>New Pet Form</h1>
      </div>
      <div id="bottomLine"></div>
      <form v-on:submit.prevent="savePet">
        <div class="form">
          <div class="row">
            <div>
              <label for="petName">Name:</label>
              <input type="text" name="petName" v-model="pet.petName" />
            </div>
            <div>
              <label for="petType">Pet Type:</label>
              <input type="text" name="petType" v-model="pet.type" />
            </div>
          </div>
          <div class="row">
            <div>
              <label for="petBreed">Breed:</label>
              <input type="text" name="petBreed" v-model="pet.breed" />
            </div>
            <div>
              <label for="petGender">Gender:</label>
              <input type="text" name="petGender" v-model="pet.gender" />
            </div>
          </div>
          <div class="row">
            <div>
              <label for="petWeight">Weight(lbs):</label>
              <input type="text" name="petWeight" v-model="pet.weight" />
            </div>
            <div>
              <label for="petAge">Age:</label>
              <input type="text" name="petAge" v-model="pet.age" />
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
          <div></div>
          <div id="description">
            <label for="description">Description:</label>
            <textarea
              name="description"
              rows="5"
              v-model="pet.description"
            ></textarea>
          </div>
          <button class="btn">Save Pet</button>
          <button class="btn cancel" v-on:click="cancel">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PetService from "../services/PetService.js";

export default {
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
      },
    };
  },
  methods: {
    savePet() {
      PetService.addPet(this.pet).then((response) => {
        if (response.status === 201) {
          alert("Pet Successfully Added!");
          this.$router.push("/pets");
        }
      });
    },
    uploadImage() {
      this.myWidget.open();
    },
    cancel() {
      this.$router.push("/pets");
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
};
</script>

<style scoped>
#rightContainer {
  width: 500px;
  margin-right: 10vw;
  direction: ltr;
}

.page {
  background-image: url(../assets/addPet.jpg);
  direction: rtl;
}

h1 {
  padding: 10px;
  margin: 102px 0 10px 0;
}

#titleDiv {
  margin: auto;
  backdrop-filter: blur(7px);
  width: 300px;
  border-radius: 7px;
}

#bottomLine {
  border-bottom: 2px solid #7acaed;
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

textarea[name="description"] {
  resize: none;
}

.cancel:hover {
  background-color: #fdc2b8;
  cursor: pointer;
}
</style>
