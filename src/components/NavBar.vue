<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-3 me-auto">
        <li class="nav-item active">
          <img
            src="../assets/WebsiteLogo.png"
            class="m-1"
            style="width: 50px"
            alt=""
          />
        </li>

        <li class="nav-item active">
          <router-link to="/" class="nav-link"> Home </router-link>
        </li>

        <li class="nav-item active">
          <router-link to="/UniversityPage" class="nav-link">
            Universities
          </router-link>
        </li>

        <li class="nav-item active">
          <router-link to="/ModuleMappingPage" class="nav-link">
            Module Mapping
          </router-link>
        </li>

        <li class="nav-item active">
          <span style="cursor: pointer;" v-on:click="scrollToAbout" class="nav-link">About</span>
        </li>
      </ul>

      <ul class="navbar-nav me-4">
        <li class="nav-item active d-flex">
          <Search class="" />
        </li>

        <li class="nav-item active d-flex">
          <router-link to="/RegisterPage" class="nav-link m-auto">
            Register
          </router-link>
        </li>

        <li
          v-if="isLoggedIn"
          class="nav-item active d-flex"
          style="margin: auto"
        >
          Hello, {{ finalName }}
        </li>
        <li v-else class="nav-item active d-flex">
          <router-link to="/SigninPage" class="nav-link m-auto">
            Sign In
          </router-link>
        </li>

        <li v-if="isLoggedIn" class="nav-item active d-flex">
          <button
            style="border: none; background: none; margin: auto"
            @click="signUserOut"
          >
            Sign Out
          </button>
        </li>
        <li v-else class="nav-item active d-flex" style="display: none"></li>

        <li class="nav-item active d-flex">
          <router-link to="/ProfilePage" class="nav-link iconborder m-auto">
            <i class="bi bi-person-circle" style="font-size: 1.5rem"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Search from "./Search.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../service/Firebase/firebaseInit"

export default {
  data() {
    return {
      router: useRouter(),
      isLoggedIn: false,
      finalName: ""
    };
  },
  methods: {
    scrollToAbout() {
      let element = document.getElementById("about");
      element.scrollIntoView({ behavior: "smooth" });
    },

    signUserOut() {
      signOut(auth)
        .then(() => {
          alert("You have successfully signed out");
          console.log("logged out user should be null:", auth.currentUser);
          this.router.push("/SignInPage");
        })
        .catch((error) => {
          console.log("error.code");
          alert(error.message);
        });
    },

    checkIfLoggeddIn() {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          this.isLoggedIn = true;
          console.log("logged in user from previous page is", user);

          const name = user.email.split("@")[0];
          const firstLetter = name.charAt(0);
          const firstLetterCap = firstLetter.toUpperCase();
          const remainingLetters = name.slice(1);
          this.finalName = firstLetterCap + remainingLetters;
        } else {
          this.isLoggedIn = false;
        }
      });
    },

    onSignOut() {
      signUserOut();
      checkIfLoggeddIn();
    },
  },

  components: {
    Search,
  },

  mounted() {
    this.checkIfLoggeddIn();
  },
};
</script>
