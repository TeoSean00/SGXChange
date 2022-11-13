<template>
  <div class="bannerHero container-fluid m-0">
    <div class="row bannerHero align-items-center">
      <div class="col-md-6 col-12 text-center p-5">
        <Banner></Banner>
      </div>
      <div class="col-md-6 m-auto d-none d-md-block bCarou p-5">
        <BannerCarousel class=""></BannerCarousel>
      </div>
    </div>
  </div>
  <ArrowAnimation></ArrowAnimation>

  <!-- NEW COMPONENT -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
    integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
    crossorigin="anonymous"
  />
  <div class="container mt-3 mb-3">
    <div class="row align-items-center">
      <div
        class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0"
      >
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-6" data-aos="fade-right">
            <div class="row">
              <div class="col-lg-12 col-md-12 mt-4 pt-2">
                <div
                  class="
                    card
                    work-desk
                    rounded
                    border-0
                    shadow-lg
                    overflow-hidden
                  "
                >
                  <img
                    src="../assets/friends.jpeg"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="img-overlay bg-dark"></div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-6 col-6" >
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div
                  class="
                    card
                    work-desk
                    rounded
                    border-0
                    shadow-lg
                    overflow-hidden
                  "
                  data-aos="fade-down"
                >
                  <img
                    src="../assets/studentTravel.jpg"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="img-overlay bg-dark"></div>
                </div>
              </div>
              <!--end col-->

              <div class="col-lg-12 col-md-12 mt-4 pt-2">
                <div
                  class="
                    card
                    work-desk
                    rounded
                    border-0
                    shadow-lg
                    overflow-hidden
                  "
                  data-aos="fade-up"
                >
                  <img
                    src="../assets/studentsHappy.jpg"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="img-overlay bg-dark"></div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end col-->

      <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
        <div class="section-title ml-lg-5">
          <h5 class="text-custom mb-3 aboutUs">WHAT WE DO</h5>
          <h4 class="title mb-4">
            Our mission is to simplify<br />
            the exchange process.
          </h4>
          <p class="text-muted mb-0">
            As students ourselves, we understand how painful it is to
            <br />collate information that is scattered everywhere.<br />
            With SGXchange, your one-stop portal for university exchange, <br />
            all the information is now easily accessible
          </p>

          <div class="row" style="color: #096dd9" data-aos="fade-left">
            <div class="col-lg-6 mt-4 pt-2">
              <div class="media align-items-center rounded shadow p-3">
                <i class="fa fa-circle-info h4 mb-0 text-custom"></i>
                <h6 class="ml-3 mb-0">
                  <a style="color: #096dd9">One-stop Portal</a>
                </h6>
              </div>
            </div>
            <div class="col-lg-6 mt-4 pt-2">
              <div class="media align-items-center rounded shadow p-3">
                <i class="fa fa-file-download h4 mb-0 text-custom"></i>
                <h6 class="ml-3 mb-0">
                  <a style="color: #096dd9">Module Mapping</a>
                </h6>
              </div>
            </div>
            <div class="col-lg-6 mt-4 pt-2">
              <div class="media align-items-center rounded shadow p-3">
                <i class="fa fa-users h4 mb-0 text-custom"></i>
                <h6 class="ml-3 mb-0">
                  <a style="color: #096dd9">Community</a>
                </h6>
              </div>
            </div>
            <div class="col-lg-6 mt-4 pt-2">
              <div class="media align-items-center rounded shadow p-3">
                <i class="fa fa-face-smile-beam h4 mb-0 text-custom"></i>
                <h6 class="ml-3 mb-0">
                  <a style="color: #096dd9">User Friendly</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--enr row-->
  </div>
  <div data-aos="fade-up">
    <p
      class="d-flex align-items-center justify-content-center fw-bold"
      style="font-size: 3rem; height: 50vh; text-align: center"
    >
      Where do you want to go?
    </p>
  </div>
  <div id="marquee" class="container-fluid px-0">
    <Marquee />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import ArrowAnimation from "@/components/ArrowAnimation.vue";
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
  width: 90%;
  height: 90%;
  object-fit: contain !important;
}

.aboutUs {
  color: #096dd9;
  font-weight: bold;
}


.bannerHero {
  width: 100%;
  height: 80vh;

  background-color: #f5f5f5;
}

#carousel {
  position: relative;
}

#bannerImg {
  height: 70vh;
}
</style>
