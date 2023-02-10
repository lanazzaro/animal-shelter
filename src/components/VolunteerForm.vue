<template>
  <div class="page">
    <div id="titleDiv">
      <h1>Apply to Volunteer</h1>
    </div>
    <div id="bottomLine"></div>
    <!-- <a><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc5rUXlj9__lDBWQhbUfWbKfDY7n_c7gDRajhMNgXD4wGQ2pQ/viewform?embedded=true" width="640" height="1050" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></a> -->
    <form class="form" v-on:submit.prevent="saveVolunteer()">
      <div class="topContainer">
        <div class="namesDiv">
          <div>
            <label for="first-name">First Name:</label>
            <input
              v-model="volunteer.volunteerFirstName"
              id="first-name"
              name="first-name"
              type="text"
              required
            />
          </div>
          <div>
            <label for="last-name">Last Name:</label>
            <input
              v-model="volunteer.volunteerLastName"
              id="last-name"
              name="last-name"
              type="text"
              required
            />
          </div>
        </div>
        <div class="emailDiv">
          <label for="email">Email:</label>
          <input
            v-model="volunteer.email"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
      </div>

      <div class="checkBoxDiv">
        <label for="confirmation">Are you over 18?</label>
        <input
          v-model="volunteer.over18"
          id="confirmation"
          name="confirmation"
          type="checkbox"
        />
      </div>
      <div id="interest">Areas of Interest:</div>
      <div class="bottomContainer">
        <div class="checkBoxDiv">
          <label for="veterinary">Veterinary: </label>
          <input
            v-model="volunteer.veterinary"
            id="veterinary"
            name="veterinary"
            type="checkbox"
          />
        </div>
        <div class="checkBoxDiv">
          <label for="cleaning">Cleaning: </label>
          <input
            v-model="volunteer.cleaning"
            id="cleaning"
            name="cleaning"
            type="checkbox"
          />
        </div>
        <div class="checkBoxDiv">
          <label for="dataEntry">Data Entry: </label>
          <input
            v-model="volunteer.dataEntry"
            id="dataEntry"
            name="dataEntry"
            type="checkbox"
          />
        </div>
        <div class="checkBoxDiv">
          <label for="photography">Photography: </label>
          <input
            v-model="volunteer.photography"
            id="photography"
            name="photography"
            type="checkbox"
          />
        </div>
      </div>
      <input class="btn" type="submit" />
    </form>
  </div>
</template>
<script>
import VolunteerService from "../services/VolunteerService";
export default {
  data() {
    return {
      volunteer: {
        volunteerFirstName: "",
        volunteerLastName: "",
        email: "",
        over18: false,
        veterinary: false,
        cleaning: false,
        dataEntry: false,
        photography: false,
      },
    };
  },
  methods: {
    saveVolunteer() {
      console.log(this.volunteer);
      VolunteerService.addVolunteer(this.volunteer).then((response) => {
        if (response.status === 201) {
          alert("Thank you for applying to be a volunteer!");
          this.$router.push("/volunteer/apply");
        }
      });
      this.resetForm();
    },
    resetForm() {
      this.volunteer = {
        volunteerFirstName: "",
        volunteerLastName: "",
        email: "",
        over18: false,
        veterinary: false,
        cleaning: false,
        dataEntry: false,
        photography: false,
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
  backdrop-filter: blur(5px);
  width: 350px;
  border-radius: 7px;
}

.page {
  background-image: url(../assets/volunteer.jpg);
}

.form {
  backdrop-filter: blur(1px);
}

.topContainer div,
.bottomContainer div {
  margin-bottom: 4px;
}

.namesDiv {
  display: flex;
  justify-content: space-between;
}

.namesDiv div {
  display: flex;
  flex-direction: column;
}

.emailDiv {
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
}

.emailDiv label {
  margin-top: 4px;
}

.checkBoxDiv {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
}

.bottomContainer div:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.5);
}

.bottomContainer div:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.2);
}

.checkBoxDiv label {
  width: 95%;
}

#interest {
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #63efb2;
  width: 200px;
  margin: auto;
  margin-bottom: 15px;
  margin-top: 15px;
}

.btn {
  width: 100%;
}
</style>
