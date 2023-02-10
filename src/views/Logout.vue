<template>
<div></div>
</template>

<script>
export default {
  created() {
    this.$store.commit("LOGOUT");
    this.$router.push("/animal-shelter/login");
  }
};
</script>
