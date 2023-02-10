<template>
  <div class="page">
    <form @submit.prevent="login">
      <div id="leftContainer">
        <h1>Welcome Back!</h1>
        <div id="bottomLine"></div>
        <div id="invalid" role="alert" v-if="invalidCredentials">
          <p>Invalid username and password!</p>
        </div>
        <div role="alert" v-if="this.$route.query.registration">
          Thank you for registering, please sign in.
        </div>
        <div class="form">
          <label for="username" class="sr-only">Username</label>
          <input
            type="text"
            id="username"
            class="form-control"
            v-model="user.username"
            required
            autofocus
          />
          <label for="password" class="sr-only">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="user.password"
            required
          />
          <button class="btn" type="submit">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      invalidCredentials: false,
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            const firstTime = response.data.user.firstTime;
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);

            //check if user logged in before
            if (firstTime == true) {
              this.$router.push("/login/change_password");
            } else {
              this.$router.push("/");
            }
          }
        })
        .catch((error) => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
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
  width: 80%;
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

#leftContainer {
  width: 400px;
  margin-left: 10vw;
}

input[type="text"] {
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
