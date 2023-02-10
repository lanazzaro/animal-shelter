<template>
  <div>
    <!-- <page-loader /> -->
    <navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
// import PageLoader from "./components/PageLoader.vue"

export default {
  components: {
    Navigation,
    // PageLoader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Comfortaa", cursive;
}

html {
  background-color: #f2fafd;
}

h1 {
  padding: 20px 0 15px 0;
  margin-bottom: 5px;
  text-align: center;
}

#bottomLine {
  border-bottom: 2px solid #63efb2;
  width: 200px;
  margin: auto;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

.btn {
  background-color: rgba(255, 255, 255);
  border: none;
  color: black;
  padding: 18px 54px;
  font-size: 16px;
  border-radius: 5px;
  margin: 20px 0 0;
}

.btn:hover {
  background-color: #a1f5d0;
  transition: 0.3s;
  cursor: pointer;
}

.page {
  /* margin-top: 20%; */
  height: 100vh;
  width: 100vw;
  background-size: cover;
  position: fixed;
  top: 0px;
  z-index: -1;
}

.form {
  margin: auto;
  margin-top: 30px;
  background-color: #c5c4f4;
  /* background: rgba(204, 204, 204, 0); */
  background: rgba(204, 204, 204, 0.4);
  box-shadow: 8px 8px 16px rgba(122, 122, 122, 0.3);
  width: 500px;
  padding: 30px 50px;
  border-radius: 8px;
  font-weight: 400;
  /* backdrop-filter: blur(2px); */
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 16px 10px;
  height: 22px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 4px;
}

textarea {
  padding: 8px 10px;
  border: 1px solid rgb(182, 182, 182);
  border-radius: 4px;
}

input[type="checkbox"] {
  height: 20px;
  width: 20px;
}

select {
  padding: 0px 10px;
  height: 34px;
  border-radius: 4px;
}

.blurredImg {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  position: fixed;
  top: 0px;
  z-index: -2;
}
</style>
