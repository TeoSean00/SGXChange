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
// animate on scroll library
import AOS from 'aos'
const el = ref();

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  created() {
    AOS.init()
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