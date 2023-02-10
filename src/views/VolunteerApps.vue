<template>
  <div class="page">
    <div class="blurredImg"></div>
    <h1>Volunteer Applications</h1>
    <div id="bottomLine"></div>
    <form action="">
      <table>
        <thead>
          <tr>
            <th>App ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Over 18?</th>
            <th>Veterinary Skills</th>
            <th>Cleaning Skills</th>
            <th>Data Entry Skills</th>
            <th>Photography Skills</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input type="text" v-model="filters.applicationId" />
            </td>
            <td>
              <input type="text" v-model="filters.volunteerFullName" />
            </td>
            <td>
              <input type="text" v-model="filters.email" />
            </td>
            <td>
              <select v-model="filters.over18">
                <option value="Show All" selected="true">Show All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
            <td>
              <select v-model="filters.veterinary">
                <option value="Show All" selected="true">Show All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
            <td>
              <select v-model="filters.cleaning">
                <option value="Show All" selected="true">Show All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
            <td>
              <select v-model="filters.dataEntry">
                <option value="Show All" selected="true">Show All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>
            <td>
              <select v-model="filters.photography">
                <option value="Show All" selected="true">Show All</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </td>

            <td></td>
          </tr>
        </tbody>

        <tbody id="infoTable">
          <!-- v-show="volunteer.over18 == (filters.over18 == 'Yes' ? true : false) || filters.over18 == 'Show All' " -->
          <tr v-for="(volunteer, key) in filterApplications" v-bind:key="key">
            <td>{{ volunteer.applicationId }}</td>
            <td>
              {{ volunteer.volunteerFirstName }}
              {{ volunteer.volunteerLastName }}
            </td>
            <td>{{ volunteer.email }}</td>
            <td>{{ volunteer.over18 ? "Yes" : "No" }}</td>
            <td>{{ volunteer.veterinary ? "Yes" : "No" }}</td>
            <td>{{ volunteer.cleaning ? "Yes" : "No" }}</td>
            <td>{{ volunteer.dataEntry ? "Yes" : "No" }}</td>
            <td>{{ volunteer.photography ? "Yes" : "No" }}</td>

            <td>
              <select v-model="volunteer.status" name="dropdown-select">
                <option value="Pending">Pending</option>
                <option value="Approved">Approve</option>
                <option value="Denied">Deny</option>
              </select>
            </td>
            <td>
              <button class="btn" v-on:click.prevent="updateStatus(volunteer)">
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import VolunteerService from "../services/VolunteerService";
export default {
  name: "volunteerApplications",
  data() {
    return {
      volunteerList: [],
      filters: {
        applicationId: "",
        volunteerFullName: "",
        email: "",
        over18: "Show All",
        veterinary: "Show All",
        cleaning: "Show All",
        dataEntry: "Show All",
        photography: "Show All",
      },
    };
  },
  computed: {
    filterApplications() {
      //    return this.volunteerList;

      let arr = this.volunteerList;
      if (this.filters.applicationId != "") {
        arr = arr.filter((eachVolunteer) => {
          return (
            eachVolunteer.applicationId == parseInt(this.filters.applicationId)
          );
        });
      }
      if (this.filters.volunteerFullName != "") {
        arr = arr.filter((eachVolunteer) => {
          return (
            eachVolunteer.volunteerFirstName
              .toLowerCase()
              .includes(this.filters.volunteerFullName.toLowerCase()) ||
            eachVolunteer.volunteerLastName
              .toLowerCase()
              .includes(this.filters.volunteerFullName.toLowerCase())
          );
        });
      }
      if (this.filters.email != "") {
        arr = arr.filter((eachVolunteer) => {
          return eachVolunteer.email
            .toLowerCase()
            .includes(this.filters.email.toLowerCase());
        });
      }
      if (this.filters.over18 != "Show All") {
        arr = arr.filter((eachVolunteer) => {
          let booleanValue = this.filters.over18 == "Yes" ? true : false;

          return eachVolunteer.over18 === booleanValue;
        });
      }

      if (this.filters.veterinary != "Show All") {
        arr = arr.filter((eachVolunteer) => {
          let booleanValue = this.filters.veterinary == "Yes" ? true : false;

          return eachVolunteer.veterinary === booleanValue;
        });
      }
      if (this.filters.cleaning != "Show All") {
        arr = arr.filter((eachVolunteer) => {
          let booleanValue = this.filters.cleaning == "Yes" ? true : false;

          return eachVolunteer.cleaning === booleanValue;
        });
      }
      if (this.filters.dataEntry != "Show All") {
        arr = arr.filter((eachVolunteer) => {
          let booleanValue = this.filters.dataEntry == "Yes" ? true : false;

          return eachVolunteer.dataEntry === booleanValue;
        });
      }
      if (this.filters.photography != "Show All") {
        arr = arr.filter((eachVolunteer) => {
          let booleanValue = this.filters.photography == "Yes" ? true : false;

          return eachVolunteer.photography === booleanValue;
        });
      }
      return arr;
    },
  },
  created() {
    VolunteerService.viewVolunteer().then((response) => {
      if (response.status === 200) {
        this.volunteerList = response.data;
      }
    });
  },
  methods: {
    updateStatus(volunteer) {
      if (confirm("Click OK to confirm status change") == true) {
        VolunteerService.updateVolunteerStatus(
          volunteer.applicationId,
          volunteer
        ).then((response) => {
          if (response.status === 200) {
            alert("Volunteer has been updated");
            this.volunteerList = this.volunteerList.filter((eachVolunteer) => {
              return eachVolunteer.status === "Pending";
            });
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.blurredImg {
  background-image: url(../assets/volunteerApplications.jpg);
  filter: blur(3px);
}

h1 {
  margin-top: 92px;
}

#bottomLine {
  border-bottom: 2px solid #7acaed;
}

table {
  width: 85%;
  margin: auto;
  margin-top: 30px;
  border-collapse: collapse;
  background-color: white;
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

/* 20 */
thead th:nth-child(2) {
  width: 15%;
}

/* 39 */
thead th:nth-child(3) {
  width: 19%;
}

/* 46 */
thead th:nth-child(4) {
  width: 7%;
}

/* 56 */
thead th:nth-child(5) {
  width: 10%;
}

/* 66 */
thead th:nth-child(6) {
  width: 10%;
}

/* 75 */
thead th:nth-child(7) {
  width: 9%;
}

/* 86 */
thead th:nth-child(8) {
  width: 11%;
}

/* 93 */
thead th:nth-child(9) {
  width: 7%;
}

/* 100 */
thead th:nth-child(10) {
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
</style>
