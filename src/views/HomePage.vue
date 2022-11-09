<template>
  <!-- <div id="searchbar">
        <Search/>
    </div> -->
  <!-- <div id="carousel">
        <Carousel/>
    </div> -->
  <div class="bannerHero container-fluid m-0">
    <div class="row bannerHero align-items-center">
      <div class="col-lg-6 col-12 text-center p-5">
        <Banner></Banner>
      </div>
      <div class="col-lg-6 m-auto d-none d-lg-block bCarou p-5">
        <BannerCarousel class=""></BannerCarousel>
      </div>
    </div>
  </div>
  <ArrowAnimation></ArrowAnimation>
  <!-- Add Parallax Scrolling here -->
  <div class="container-fluid textbox">
    <!-- <img class="mx-auto d-block logo" src="../assets/WebsiteLogo.png" alt="" /> -->
    <div class="row ">
      <div class="col-lg-6 d-lg-block d-none">
        <img id="friends" src="../assets/friends.jpeg" alt="" class="float-end" />
      </div>
      <div class="col-lg-6 col-12 d-flex align-items-center text-center px-5">
        <div class="row">
          <div class="col">
            <div class="row my-5">
              <h5 style="color:#9191ec;">WHAT MAKES US DIFFERENT</h5>
              <h1>Why SGXchange</h1>
            </div>
            <div class="row my-5 text-start">
              <h4>Consolidated University information</h4>
              <p class="fs-6">
                As students ourselves, we understand how painful it can be to source
                information with information scattered everywhere. SGXchange solves
                that by providing a platform where information is consolidated.
              </p>
            </div>
            <div class="row my-5 text-start">
              <h4>Module Mapping</h4>
              <p class="fs-6">
                Module mapping is often a tedious mapping process. However, thanks to
                SGXchange you can easily map your modules to exchange universities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div><p class="d-flex align-items-center justify-content-center fw-bold" style="font-size:3rem;height:40vh;text-align: center;">Where do you want to go?</p></div>
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
