<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <About />
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue"
import { ref, onMounted } from "vue";
// import crudTest from './composables/firebase/crudTest.vue';
const el = ref();

export default {
  name: "App",
  components: {
    NavBar,
    About,
    Footer
  },
};
</script>
