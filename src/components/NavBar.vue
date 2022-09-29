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
            UniversityPage
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/ModulePage" class="nav-link">
            ModulePage
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/ModuleMappingPage" class="nav-link">
            ModuleMappingPage
          </router-link>
        </li>
      </ul>
    </div>
    <button @click="colorMode = colorMode === 'dark' ? 'light' : 'dark'">
    colorMode {{ colorMode }}
    </button>
  </nav>
</template>

<script>
import { useColorMode } from '@vueuse/core';
export default {
  data() {
    return {
        colorMode: useColorMode()
    };
  },
  methods: {
  },
};
</script>
