<template>
  <!-- <div id="searchbar">
        <Search/>
    </div> -->
  <!-- <div id="carousel">
        <Carousel/>
    </div> -->
  <Banner></Banner>
  <div class="button-banner d-flex align-center justify-content-center">
    <div class="d-flex justify-content-center align-items-center p-5 mt-5">
      <router-link to="/ModuleMappingPage" class="btn btn-dark m-5 btn-lg ">Get help for module mapping</router-link>
      <span class="h3">or</span>
      <a class="btn btn-light m-5 btn-lg" href="#marquee">Browse Universities</a>
    </div>
  </div>
  <div id="marquee">
    <Marquee />
  </div>
  <div>
    <!-- <GoogleMap /> -->
  </div>

  <div class="container-fluid p-4">
    <div class="row">
      <h2>Suggested universities</h2>
    </div>
    <div class="row d-flex justify-content-start">
      <UniCardSmall class="unicard" v-for="i in 9" :key="i" />
      <!-- some binding needed for unicard data, need to wait for backend -->
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import UniCardSmall from "@/components/UniCardSmall.vue";
// import Search from "@/components/Search.vue";
// import Carousel from "@/components/Carousel.vue";
import { reactive } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import Marquee from "@/components/Marquee.vue";
// import GoogleMap from "@/components/GoogleMap.vue";

export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    Banner,
    UniCardSmall,
    // Search,
    // Carousel,
    Marquee,
    // GoogleMap,
  },
};
</script>
<style scoped>
#carousel {
  position: relative;
}
.button-banner {
  height: 75vh;
}
</style>
