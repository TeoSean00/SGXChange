<template>
  <div class="pageSizing">
    <NavBar />
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { ref, onMounted } from "vue";
import Footer from "@/components/Footer.vue";

// import crudTest from './composables/firebase/crudTest.vue';
const el = ref();

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style >
.pageSizing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>