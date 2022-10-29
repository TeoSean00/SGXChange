<template>
  <!-- <div id="searchbar">
        <Search/>
    </div> -->
  <!-- <div id="carousel">
        <Carousel/>
    </div> -->
  <Banner></Banner>
  <div class="button-banner d-flex align-center justify-content-center">
    <div class="d-flex justify-content-center align-items-center p-5">
      <router-link to="/ModuleMappingPage" class="btn btn-dark m-5 btn-lg"
        >Get help for module mapping</router-link
      >
      <span class="h3">or</span>
      <a class="btn btn-light m-5 btn-lg" href="#marquee"
        >Browse Universities</a
      >
    </div>
  </div>
  <ArrowAnimation></ArrowAnimation>
  <div id="marquee" class="container-fluid px-0">
    <Marquee />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import ArrowAnimation from "@/components/ArrowAnimation.vue";
// import Search from "@/components/Search.vue";
// import Carousel from "@/components/Carousel.vue";
import { reactive } from "vue";
import Marquee from "@/components/Marquee.vue";

export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    Banner,
    ArrowAnimation,
    // Search,
    // Carousel,
    Marquee,
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
