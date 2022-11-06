<template>
  <!-- <div id="searchbar">
        <Search/>
    </div> -->
  <!-- <div id="carousel">
        <Carousel/>
    </div> -->
  <div class="bannerHero container-fluid m-0">
    <div class="row bannerHero align-items-center">
      <div class="col-md-6 col-12 text-center">
        <Banner></Banner>
      </div>
      <div class="col-6 m-auto d-none d-md-block bCarou">
        <BannerCarousel class=""></BannerCarousel>
      </div>
    </div>
  </div>

  <ArrowAnimation></ArrowAnimation>
  <!-- Add Parallax Scrolling here -->
  <div class="container-fluid textbox">
    <!-- <img class="mx-auto d-block logo" src="../assets/WebsiteLogo.png" alt="" /> -->
    <h5 class="text-center">WHAT MAKES US DIFFERENT</h5>
    <div class="row">
      <h1 class="text-center">Why SGXchange</h1>
    </div>

    <div class="row">
      <div class="col-6">
        <img id="friends" src="../assets/friends.jpeg" alt="" />
        <p></p>
      </div>
      <div class="col-6 text-left align-items-center">
        <h5>Consolidated University information</h5>
        <p>
          As students ourselves, we understand how painful it can be to source
          information with information scattered everywhere. SGXchange solves
          that by providing a platform where information is consolidated.
        </p>
        <h5>Module Mapping</h5>
        <p>
          Module mapping is often a tedious mapping process. However, thanks to
          SGXchange you can easily map your modules to exchange universities
        </p>
      </div>
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
h1 {
  font-size: 2.6rem;
}

h2 {
  font-size: 1.6rem;
}
h5 {
  font-size: 1.1rem;
}
#friends {
  width: 100%;
  height: 100%;
}

.details {
  display: flex;
}

.bannerHero {
  width: 100%;
  height: 80vh;

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
  font-size: 1rem;
  border-radius: 5px;
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
