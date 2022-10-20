<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-3 me-auto">
        <li class="nav-item active">
          <img src="../assets/WebsiteLogo.png" class="m-1" style="width: 50px" alt="" />
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
          <span v-on:click="scrollToAbout" class="nav-link">About</span>
        </li>
      </ul>
      <ul class="navbar-nav me-4">
        <li class="nav-item active d-flex">
          <Search class="" />
        </li>
        <li class="nav-item active d-flex">
          <router-link to="/ModulePage" class="m-auto nav-link">
            <i class="bi bi-person-circle" style="font-size: 1.5rem;"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Search from "./Search.vue";
export default {
  data() {
    return {};
  },
  methods: {
    scrollToAbout() {
      let element = document.getElementById("about");
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
  components: { Search },
};
</script>
