import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import AdoptablePets from '../views/AdoptablePets.vue'
import NewVolunteer from '../views/NewVolunteer.vue'
import PetDetailsView from '../views/PetDetailsView.vue'
import AddNewPet from '../views/AddNewPet.vue'
import UpdatePetView from '../views/UpdatePetView.vue'
import VolunteerApps from '../views/VolunteerApps.vue'
import VolunteerDirectoryView from '../views/VolunteerDirectoryView.vue'
import LoginFirstTime from '../views/LoginFirstTime.vue'
import AdoptionFormView from '../views/AdoptionFormView.vue'
import AdoptionApps from '../views/AdoptionApps.vue'
import PromoteVolunteer from '../views/PromoteVolunteer.vue'
import AddPhotosView from '../views/AddPhotosView.vue'
import AboutUs from '../views/AboutUs.vue'

Vue.use(Router)
/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/pets",
      name: "pets",
      component: AdoptablePets,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/volunteer/apply",
      name: "volunteer",
      component: NewVolunteer,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/pets/:petId',
      name: "petDetailsView",
      component: PetDetailsView,
      props: true
    },
    {
      path: '/pets/add',
      name: "newPetForm",
      component: AddNewPet,
      props: true
    },
    {
      path: '/pets/:petId/edit',
      name: "updatePet",
      component: UpdatePetView,
      props: true
    },
    {
      path: '/volunteer/applications',
      name: "volunteerApplications",
      component: VolunteerApps,
      meta: {
      requiresAuth: true
      }
    },
    {
      path: '/volunteer/directory',
      name: "volunteerDirectory",
      component: VolunteerDirectoryView,
      meta: {
      requiresAuth: true
      }
    },
    {
      path: '/login/change_password',
      name: "loginFirstTime",
      component: LoginFirstTime,
    },
    {
      path: '/pets/:petId/adopt',
      name: "adoptionForm",
      component: AdoptionFormView,
    },
    {
      path: '/adoption_applications',
      name: "adoptionApplications",
      component: AdoptionApps,
      meta: {
      requiresAuth: true
      }
    },
    {
      path: '/directory/:applicationId',
      name: "PromoteVolunteer",
      component: PromoteVolunteer,
      props: true
    },
    {
      path: '/images/add/:petId',
      name: "AddPhotosView",
      component: AddPhotosView,
      props: true
    },
    {
      path: '/about-us',
      name: "AboutUs",
      component: AboutUs,
      meta: {
        requiresAuth: false
        }
    }
]
})
router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});
export default router;