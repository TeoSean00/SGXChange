<template>
  <!-- <div id="searchbar">
        <Search/>
    </div> -->
  <!-- <div id="carousel">
        <Carousel/>
    </div> -->
  <div>
    <Marquee />
  </div>
  <div class="container-fluid p-4">
    <div class="row">
      <h2>Suggested universities</h2>
    </div>
    <div class="row d-flex justify-content-start">
      <UniCardSmall class="unicard" v-for="i in 9" :key="i" />
    </div>
  </div>
</template>
<script>
import UniCardSmall from "@/components/UniCardSmall.vue";
// import Search from "@/components/Search.vue";
// import Carousel from "@/components/Carousel.vue";
import { reactive } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import Marquee from "@/components/Marquee.vue";

export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    UniCardSmall,
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
</style>
