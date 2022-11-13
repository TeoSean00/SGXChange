<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link to="/" class="navbar-brand d-none d-sm-block">
      <img
        src="../assets/WebsiteLogo.png"
        class="m-1"
        style="width: 50px"
        alt=""
      />
    </router-link>
    <div class="search-wrapper bg-light active d-md-none" style="width: ">
      <div class="input-holder">
        <input
          v-model="searchItem"
          type="text"
          class="search-input"
          placeholder="Enter key to search"
          v-on:keyup.enter="searchUni"
        />
        <button class="search-icon">
          <span></span>
        </button>
      </div>
    </div>
    <button
      id="navBtn"
      @click="closeNav()"
      class="navbar-toggler float-right"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul
        class="
          navbar-nav
          ms-3
          me-auto
          align-items-center-md align-items-baseline
          justify-content-between
        "
      >
        <li class="nav-item active d-flex align-middle">
          <router-link to="/" class="nav-link"> Home </router-link>
        </li>

        <li class="nav-item active d-flex">
          <router-link to="/UniversityPage" class="nav-link">
            Universities
          </router-link>
        </li>

        <li class="nav-item active d-flex">
          <router-link to="/ModuleMappingPage" class="nav-link">
            Module Mapping
          </router-link>
        </li>
      </ul>

      <ul class="navbar-nav ms-3">
        <li class="nav-item active mt-0 d-none d-md-block">
          <Search />
        </li>
        <li
          class="
            nav-item
            active
            d-md-flex
            justify-content-md-center
            align-items-baseline
          "
        >
          <router-link to="/RegisterPage" class="nav-link m-auto">
            Register
          </router-link>
        </li>

        <li
          v-if="isLoggedIn"
          class="nav-item active d-md-flex justify-content-center"
          style="margin: auto"
        >
          Hello, {{ finalName }}
        </li>
        <li v-else class="nav-item active d-md-flex justify-content-center">
          <router-link to="/SigninPage" class="nav-link m-auto">
            Sign In
          </router-link>
        </li>

        <li
          v-if="isLoggedIn"
          class="nav-item active d-md-flex justify-content-center"
        >
          <button
            style="border: none; background: none; margin: auto"
            @click="signUserOut"
          >
            Sign Out
          </button>
        </li>
        <li
          v-else
          class="nav-item active d-md-flex justify-content-center"
          style="display: none"
        ></li>

        <li class="nav-item active d-md-flex justify-content-center">
          <router-link to="/ProfilePage" class="nav-link m-auto">
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
import { auth } from "../service/Firebase/firebaseInit";

export default {
  data() {
    return {
      router: useRouter(),
      isLoggedIn: false,
      finalName: "",
      navSet: false,
    };
  },
  methods: {
    closeNav() {
      if (!this.navSet) {
        this.navSet = true;
        const navLinks = document.querySelectorAll(".nav-item");
        const menuToggle = document.getElementById("navbarSupportedContent");
        const bsCollapse = new bootstrap.Collapse(menuToggle);
        navLinks.forEach((l) => {
          l.addEventListener("click", () => {
            bsCollapse.toggle();
          });
        });
      }
    },
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

    searchUni() {
      if (this.searchItem != "") {
        if (this.$route.name != "UniversityPageSearch") {
          console.log("path1");
          this.$router.push({
            path: "/UniversityPage/search",
            query: { search: this.searchItem },
          });
        } else {
          //I put catch because i dont know how to solve the error
          console.log("path2");
          this.$router.push({
            path: "/UniversityPage/search",
            query: { search: this.searchItem },
          });
        }
      }
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
<style scoped>
nav {
  font-size: 1rem;
}

#navBtn {
  margin-right: 10px;
}

.search-wrapper .input-holder {
  height: 70px;
  width: 70px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0);
  border-radius: 6px;
  position: relative;
}
.search-wrapper.active .input-holder {
  width: 300px;
  border-radius: 50px;
  background: rgb(255, 255, 255);
}
.search-wrapper .input-holder .search-input {
  width: 100%;
  height: 50px;
  padding: 0px 70px 0 20px;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  background: transparent;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-family: "Open Sans", Arial, Verdana;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  color: black;
}
.search-wrapper.active .input-holder .search-input {
  opacity: 1;
  transform: translate(0, 10px);
}
.search-wrapper .input-holder .search-icon {
  width: 70px;
  height: 70px;
  border: none;
  border-radius: 6px;
  background: rgb(248, 249, 250);
  padding: 0px;
  outline: none;
  position: relative;
  z-index: 2;
  float: right;
  cursor: pointer;
}
.search-wrapper.active .input-holder .search-icon {
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 30px;
}
.search-wrapper .input-holder .search-icon span {
  width: 22px;
  height: 22px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
.search-wrapper.active .input-holder .search-icon span {
  transform: rotate(-45deg);
}
.search-wrapper .input-holder .search-icon span::before,
.search-wrapper .input-holder .search-icon span::after {
  position: absolute;
  content: "";
}
.search-wrapper .input-holder .search-icon span::before {
  width: 4px;
  height: 11px;
  left: 9px;
  top: 18px;
  border-radius: 2px;
  background: black;
}
.search-wrapper .input-holder .search-icon span::after {
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  border-radius: 18px;
  border: 2px solid black;
}
</style>
