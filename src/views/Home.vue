<template>
  <div class="page">
    <div class="blurredImg"></div>
    <pet-carousel />
  </div>
</template>

<script>
import PetCarousel from "../components/PetCarousel.vue";

export default {
  name: "home",
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    PetCarousel,
  },
};
</script>

<style scoped>
.blurredImg {
  background-image: url(../assets/home.jpg);
  filter: blur(3px);
}

.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: blue; */
  z-index: 999;
}
</style>
