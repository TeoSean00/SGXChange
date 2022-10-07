<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto ">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/UniversityPage" class="nav-link">
            Universities
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/ModuleMappingPage" class="nav-link">
            ModuleMapping
          </router-link>
        </li>
        <li class="nav-item active">
            <span v-on:click="scrollToAbout" class="nav-link">About</span>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/ModulePage" class="nav-link iconborder">
            <i class="fa-solid fa-user "></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    scrollToAbout() {
      let element = document.getElementById('about');
      element.scrollIntoView({ behavior: "smooth" });
    }
  },
};
</script>
