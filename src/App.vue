<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <About />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    NavBar,
    About,
  },
};
</script>
