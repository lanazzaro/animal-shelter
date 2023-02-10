<template>
  <div class="page">
    <div class="blurredImg"></div>
    <div id="titleDiv">
      <h1>
        Promote {{ volunteer.volunteerFirstName }}
        {{ volunteer.volunteerLastName }} to Admin Role?
      </h1>
    </div>
    <div id="bottomLine"></div>
    <div id="buttonContainer">
      <button class="btn cancel" v-on:click="cancel">Cancel</button>

      <button class="btn" v-on:click.prevent="updateRole(volunteer)">
        Promote
      </button>
    </div>
  </div>
</template>

<script>
import VolunteerService from "../services/VolunteerService";
export default {
  props: ["applicationId"],
  computed: {
    volunteer() {
      return this.$store.getters.volunteer;
    },
  },
  created() {
    const activeVolunteerId = this.$route.params.applicationId;
    this.$store.commit("SET_ACTIVE_VOLUNTEER", activeVolunteerId);
  },
  methods: {
    updateRole(volunteer) {
      if (confirm("Click OK to confirm role change") == true) {
        VolunteerService.promoteToAdmin(
          volunteer.applicationId,
          volunteer
        ).then((response) => {
          if (response.status === 200) {
            alert("Volunteer Role has been updated");
            this.$router.push("/volunteer/directory");
            //  this.volunteerList = this.volunteerList.filter((eachVolunteer) => {
            //    return eachVolunteer.status === "Pending";
            // });
          }
        });
      }
    },
    cancel() {
      this.$router.push("/volunteer/directory");
    },
  },
};
</script>

<style scoped>
/* .page {
  background-color: white; */
/* background-image: url(../assets/promoteToAdmin.jpg); */
/* filter: blur(2px);
} */

#bottomLine {
  border-bottom: 2px solid #7acaed;
}

/* h1 {
  padding: 10px;
  margin: 102px 0 10px 0;
} */

#titleDiv {
  margin: auto;
  backdrop-filter: blur(7px);
  width: 900px;
  border-radius: 7px;
}

/* .blurredImg {
  background-image: url(../assets/promoteToAdmin.jpg);
  filter: blur(2px);
} */

#buttonContainer {
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: auto;
  margin-top: 30px;
  /* background-color: white;  */
  border-radius: 4px;
  /* box-shadow: 2px 4px 4px rgb(204, 204, 204); */
}

.btn {
  margin-top: 0;
  background-color: #a1f5d0;
  /* box-shadow: 2px 4px 4px rgb(204, 204, 204); */
}

.btn:hover {
  transition: 0.3s;
  cursor: pointer;
}

.cancel {
  margin-top: 0;
  background-color: #fdc2b8;
}

.cancel:hover {
  transition: 0.3s;
  cursor: pointer;
}

/* .cancel:hover {
  background-color: #fdc2b8;
  cursor: pointer;
} */
</style>
