<template>
  <div class="page">
    <div class="blurredImg"></div>
    <div id="titleDiv">
      <h1>Add Photos for {{ pet.petName }}</h1>
      <div id="bottomLine"></div>
    </div>
    <div id="imgUploadDiv">
      <div class="column">
        <label for="petImage">Image URL:</label>
        <div class="row">
          <input type="text" name="petImage" v-model="pet.petImage" />
          <button class="btn btn-1" id="upload" @click.prevent="uploadImage">
            Upload Image
          </button>
        </div>
        <button class="btn" @click="addImage">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import PetImageService from "../services/PetImageService.js";
export default {
  // props: ['petId'],
  name: "add-photos",
  data() {
    return {
      petImages: [],
      pet: {},
    };
  },
  computed: {
    petImage() {
      return this.$store.getters.petImage;
    },
  },
  created() {
    this.pet = this.$store.state.activePet;

    // const activeImageId = this.$route.params.petId;
    // this.$store.commit("SET_ACTIVE_PET,", activeImageId)
  },
  methods: {
    addImage() {
      const newPet = {
        petImage: this.pet.petImage,
        petId: this.$route.params.petId,
      };
      PetImageService.addPetImage(this.$route.params.petId, newPet).then(
        (response) => {
          if (response.status === 201) {
            alert("Images Added!");
            this.$router.push("/pets");
          }
        }
      );
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
};
</script>

<style scoped>
h1 {
  padding: 10px;
  margin: 102px 0 10px 0;
  /* color: rgb(245, 245, 245); */
  width: 800px;
}

label {
  font-weight: 800;
}

#bottomLine {
  border-bottom: 2px solid #7acaed;
  margin-left: 16vw;
}

.blurredImg {
  background-image: url("https://images.pexels.com/photos/8811386/pexels-photo-8811386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  ");
}

#titleDiv {
  margin: auto;
  border-radius: 7px;
}

#imgUploadDiv {
  width: 450px;
  background-color: rgba(204, 204, 204, 0.4);
  padding: 30px 50px;
  border-radius: 8px;
  margin: auto;
  margin-top: 30px;
  margin-left: 9.5vw;
  box-shadow: 8px 8px 16px rgba(122, 122, 122, 0.3);
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}

.column {
  display: flex;
  flex-direction: column;
}

.btn {
  margin: 0;
}

.btn-1 {
  padding: 8px 20px;
}
</style>
