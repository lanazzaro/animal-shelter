<template>
  <div class="page">
    <div class="blurredImg"></div>
    <h1>Adoption Applications</h1>
    <div id="bottomLine"></div>
    <form action="">
      <table class="adoption-table">
        <thead>
          <tr>
            <th>App ID</th>
            <th>Pet ID</th>
            <th>Adopter Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Any Pets?</th>
            <th># of Pets</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(adopter, key) in adoptionList" v-bind:key="key">
            <td>{{ adopter.adopterId }}</td>
            <!-- <td><router-link v-bind:to="{ name: petDetailsView}"> {{pet.petId}}</router-link></td> -->
            <td>{{ adopter.petID }}</td>
            <td>{{ adopter.adopterName }}</td>
            <td>{{ adopter.email }}</td>
            <td>{{ adopter.phoneNumber }}</td>
            <td>{{ adopter.city }}</td>
            <td>{{ adopter.state }}</td>
            <td>{{ adopter.zipcode }}</td>
            <td>{{ adopter.anyPets ? "Yes" : "No" }}</td>
            <td>{{ adopter.numberOfPets }}</td>
            <td>{{ adopter.approvalStatus }}</td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import AdoptionService from "../services/AdoptionService";
import PetService from "../services/PetService";
export default {
  name: "adoptionApplications",
  data() {
    return {
      adoptionList: [],
      filters: {
        applicationID: "",
        petID: "",
        adopterFullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        state: "",
        zipcode: "",
        anyPets: "",
        numberOfPets: "",
        status: "",
      },
    };
  },
  computed: {
    filterApplications() {
      let arr = this.adoptionList;
      if (this.filters.applicationID != "") {
        arr = arr.filter((eachAdoption) => {
          return (
            eachAdoption.applicationId == parseInt(this.filters.applicationID)
          );
        });
      }
      if (this.petID != "") {
        arr = arr.filter((eachAdoption) => {
          return eachAdoption.petID == parseInt(this.petID);
        });
      }
      if (this.filters.adopterFullName != "") {
        arr = arr.filter((eachAdoption) => {
          return eachAdoption.adopterFullName
            .toLowerCase()
            .includes(this.filters.adopterFullName.toLowerCase());
        });
      }
      if (this.filters.email != "") {
        arr = arr.filter((eachAdoption) => {
          return eachAdoption.email
            .toLowerCase()
            .includes(this.filters.email.toLowerCase());
        });
      }
      if (this.filters.phoneNumber != "") {
        arr = arr.filter((eachAdoption) => {
          return eachAdoption.phoneNumber
            .toLowerCase()
            .includes(this.filters.phoneNumber.toLowerCase());
        });
      }
      if (this.filters.city != "") {
        arr = arr.filter((eachAdoption) => {
          return eachAdoption.city
            .toLowerCase()
            .includes(this.filters.city.toLowerCase());
        });
      }
      if (this.filters.state != "") {
        arr = arr.filter((eachAdoption) => {
          return eachAdoption.state
            .toLowerCase()
            .includes(this.filters.state.toLowerCase());
        });
      }
      if (this.filters.zipcode != "") {
        arr = arr.filter((eachAdoption) => {
          return eachAdoption.zipcode
            .toLowerCase()
            .includes(this.filters.zipcode.toLowerCase());
        });
      }
      if (this.filters.anyPets != "") {
        arr = arr.filter((eachAdoption) => {
          let booleanValue = this.filters.anyPets == "Yes" ? true : false;

          return eachAdoption.anyPets === booleanValue;
        });
      }
      if (this.filters.numberOfPets != "") {
        arr = arr.filter((eachAdoption) => {
          return eachAdoption.numberOfPets.includes(this.filters.numberOfPets);
        });
      }

      return arr;
    },
  },
  created() {
    AdoptionService.viewAdoptionApplications().then((response) => {
      if (response.status === 200) {
        this.adoptionList = response.data;
      }
      for (let i = 0; i < this.adoptionList.length; i++) {
        if (this.$store.state.pets.length == 0) {
          PetService.getAdoptablePets().then((response) => {
            response;
            this.$store.commit("SET_PETS", response.data);
          });
        }
        for (let j = 0; j < this.$store.state.pets.length; j++) {
          if (
            this.adoptionList[i].adopterId ==
            this.$store.state.pets[j].adopterId
          ) {
            this.adoptionList[i].petID = this.$store.state.pets[j].petId;
          }
        }
      }
    });
  },
};
</script>

<style scoped>
.blurredImg {
  background-image: url(../assets/adoptionApplications.jpg);
  filter: blur(3px);
}

#titleDiv {
  margin: auto;
  backdrop-filter: blur(7px);
  width: 410px;
  border-radius: 7px;
}

h1 {
  margin: 102px 0 10px 0;
  padding: 10px;
  color: rgb(250, 250, 250);
}

#bottomLine {
  border-bottom: 2px solid #7acaed;
}

table {
  width: 85%;
  margin: auto;
  margin-top: 30px;
  border-collapse: collapse;
}

td,
th {
  height: 45px;
}

table,
tr,
td,
th {
  border: none;
}

/* 5 */
thead th:nth-child(1) {
  width: 5%;
}

/* 10 */
thead th:nth-child(2) {
  width: 5%;
}

/* 30 */
thead th:nth-child(3) {
  width: 18%;
}

/* 50 */
thead th:nth-child(4) {
  width: 20%;
}

/* 60 */
thead th:nth-child(5) {
  width: 10%;
}

/* 67 */
thead th:nth-child(6) {
  width: 9%;
}

/* 72 */
thead th:nth-child(7) {
  width: 5%;
}

/* 79 */
thead th:nth-child(8) {
  width: 7%;
}

/* 87 */
thead th:nth-child(9) {
  width: 8%;
}

/* 93 */
thead th:nth-child(10) {
  width: 6%;
}

/* 100 */
thead th:nth-child(11) {
  width: 7%;
}

tr td input[type="text"],
tr td select {
  width: 98%;
  margin: 1%;
}

#infoTable td {
  padding-left: 5px;
}

#infoTable td:nth-last-child(2),
#infoTable td:last-child {
  padding-left: 0px;
}

.btn {
  width: 94%;
  padding: 8px;
  margin: 0 3%;
  background-color: #20a7e1;
  color: rgb(245, 245, 245);
}

.btn:hover {
  background-color: #1a92c5;
  transition: 0.3s;
  cursor: pointer;
}

tr:nth-child(even) {
  background: #c5e8f7;
}
tr:nth-child(odd) {
  background: #fff;
}

td {
  padding-left: 5px;
}
</style>
