<template>
  <!-- <div id="searchbar">
        <Search/>
    </div> -->
  <!-- <div id="carousel">
        <Carousel/>
    </div> -->
  <div class="container-fluid bannerHero">
    <div class="row">
      <div class="col-6 text-center" align="center">
        <div class="row text-center" align="center">
          <Banner></Banner>
        </div>
        <div class="row mx-auto text-center">
          <div class="col-6" align="center">
            <router-link to="/ModuleMappingPage" id="seeUni">
              <button class="btn">Start Module Mapping</button>
            </router-link>
          </div>
          <div class="col-6 text-center" align="center">
            <router-link to="/UniversityPage" id="seeUni">
              <button class="btn">Browse Universities</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-6" align="center">
        <BannerCarousel class="mt-5"></BannerCarousel>
      </div>
    </div>
  </div>
  <!-- 
  <br />
  <br /> -->
  <!-- <div class="container-fluid">
    <h2 class="ms-4">Trending Universities</h2>
    <hr />
    <div class="row">
      <div class="col-3"></div>
    </div>
  </div> -->

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
import BannerCarousel from "@/components/BannerCarousel.vue";

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
    BannerCarousel,
  },
};
</script>
<style scoped>
.bannerHero {
  /* height: 80vh; */
  padding-bottom: 70px;
  background-color: #f5f5f5;
}

#carousel {
  position: relative;
}
.button-banner {
  height: 75vh;
}

.btn {
  transition: all 0.2s;
  background-color: #f5f5f5;
  border-radius: 2px;
  border-color: black;
  font-size: 16px;
  border-radius: 25px;
  padding-left: 80px;
  padding-right: 80px;
  color: black;
  font-weight: 500;
  margin-top: 50px;
}

.btn:hover {
  background-color: #9191ec;
  border-color: #9191ec;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

#bannerImg {
  height: 70vh;
}
</style>
