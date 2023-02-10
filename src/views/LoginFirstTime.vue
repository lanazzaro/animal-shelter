<template>
  <div class="page">
    <form
      id="updatePassword"
      class="form-register"
      @submit.prevent="updatePassword"
    >
      <h1>Welcome, {{ user.username }}!</h1>
      <div id="bottomLine"></div>

      <div id="invalid" role="alert" v-if="registrationErrors">
        <p>{{ registrationErrorMsg }}</p>
      </div>

      <div class="form">
        <h4>Please update your password:</h4>

        <label for="password" class="sr-only">New Password: </label>
        <input
          type="password"
          id="password"
          class="form-control"
          v-model="user.password"
          required
        />

        <label for="password2" class="sr-only">Confirm Password: </label
        ><input
          type="password"
          id="confirmPassword"
          class="form-control"
          v-model="user.confirmPassword"
          required
        />

        <div></div>
        <button class="btn" type="submit">Update Account</button>
      </div>
    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login-first-time",
  data() {
    return {
      user: {
        username: this.$store.state.user.username,
        password: "",
        confirmPassword: "",
      },
      registrationErrors: false,
      registrationErrorMsg: "There were problems updating your password.",
    };
  },
  methods: {
    updatePassword() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = "Password & Confirm Password do not match.";
      } else {
        authService
          .updatePassword(this.user)
          .then((response) => {
            if (response.status == 200) {
              alert("Password was successfully changed.");
              this.$router.push({
                path: "/",
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = "Bad Request: Validation Errors";
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = "There were problems updating your password.";
    },
  },
};
</script>

<style scoped>
.page {
  background-image: url(../assets/login.jpg);
}

h1 {
  margin-top: 92px;
}

#invalid {
  margin: auto;
  width: 100%;
  background-color: rgb(241, 132, 114, 0.9);
  border-radius: 5px;
}

#invalid p {
  text-align: center;
  font-weight: 800;
  padding: 8px 10px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 400px;
}

#updatePassword {
  width: 400px;
  margin-left: 10vw;
}

h4 {
  margin-bottom: 10px;
}

input[type="password"] {
  margin-bottom: 8px;
}

.btn {
  margin-bottom: 8px;
}

a {
  font-size: 14px;
  color: black;
}

a:hover {
  color: rgb(123, 45, 212);
  transition: 0.2s;
}
</style>
