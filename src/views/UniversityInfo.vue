<template>
  <div
    class="container-fluid mt-4"
    style="max-width: fit-content;"
  >
  </div>
  <div
    class="container-fluid px-5"
    style="max-width: fit-content;"
  >
    <div class="row mb-3">
      <div class="col h2">{{ uniName }}</div>
      <div class="col text-end">
        <!-- sharing and saving to link to function / api -->
        <!-- FACEBOOK -->
        <span class="d-flex flex-row gap-4 justify-content-end">
          <a class="bi bi-facebook fs-4" @click="fbs_click" target="_blank">
          </a>
          <!-- TWITTER -->
          <a class="bi bi-twitter fs-4" @click="tbs_click" target="_blank"> </a>
          <!-- LINKEDIN -->
          <a class="bi bi-linkedin fs-4" @click="lbs_click" target="_blank">
          </a>
          <FavBtn :uniName="uniName"></FavBtn>
        </span>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <div class="d-inline me-1">
          <i class="bi bi-star-fill"></i>
          <!-- to insert the review rating based on reviews system -->
          4.64
        </div>

        <!-- sean how to insert count of reviews here according to uni -->
        <a href="#" class="text-dark mx-1">{{this.reviews.length}} Reviews</a>
        <a href="#" class="text-bold mx-1">{{ region }}∙{{ country }}</a>
      </div>
      <div class="col-6">

      </div>
    </div>
    <div class="row mb-5">
      <div class="col col-sm-10 col-md-10">
        <div
          id="carouselExampleIndicators"
          class="carousel slide w-100"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <template
            v-for="(img, idx) of uniImgArr"
            :key="idx">
              <button v-if="idx == 1"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                :data-bs-slide-to="idx"
                class="active"
                aria-current="true"
                :aria-label="'Slide ' + idx"
              ></button>
              <button v-else
                type="button"
                data-bs-target="#carouselExampleIndicators"
                :data-bs-slide-to="idx"
                class=""
                aria-current="true"
                :aria-label="'Slide ' + idx"
              ></button>
            </template>
          </div>
          <div class="carousel-inner">
            <template v-for="(img, idx) of uniImgArr" :key="idx">

              <div v-if="idx == 1" class="carousel-item active" >
                <img
                  :src="img"
                  class="d-block w-100"
                  style="width: 550px; height: 500px; object-fit: cover;"
                  alt="..."
                />
              </div>
              <div v-else class="carousel-item " >
                <img
                  :src="img"
                  class="d-block w-100"
                  style="width: 550px; height: 500px; object-fit: cover;"
                  alt="..."
                />
              </div>
            </template>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- <div class="col-6">
        <img src="../assets/440px-University_of_St._Gallen_EUR-HSG_Institute_Building.jpg" class="w-100" style=""
          alt="uni-display" />
      </div>
      <div class="col-2">
        <img
          src="../assets/440px-University_of_St._Gallen_Convention_and_Executive_Education_Center.jpg"
          class="w-100 mb-2"
          alt=""
        />
        <img
          src="../assets/a29feeb0-0635-4dc0-a247-e77a0f254dbd.webp"
          class="w-100"
          alt=""
        />
      </div>
      <div class="col-2">
        <img src="../assets/311ca332-dcb2-4b66-945c-ded8712a3543.webp" class="w-100 mb-2" alt="" />
        <img src="../assets/HSG-SQUARE-2000x1125.jpeg" class="w-100" style="width: 18rem" alt="" />
      </div> -->
    </div>
    <!-- test -->
    <div class="row">
      <div class="col">
        <hr />
      </div>
    </div>
    <!-- GPA info -->
    <div class="row">
      <div class="col d-flex gap-3 pt-3">
        <i class="bi bi-book m-1"></i>
        <b style="font-size: large">Gpa Info </b>
      </div>
    </div>
    <div class="row">
      <div class="col py-3">
        <div class="ps-5 pt-2 d-flex flex-column gap-4">
          <span><b>Min Gpa : </b>{{ gpaReq }}</span>
          <b
            >10th/90th Percentile :
            <span class="badge text-bg-danger m-1">{{ igpaTen }}</span>
            |
            <span class="badge text-bg-success m-1">{{ igpaNinety }}</span>
          </b>
        </div>
      </div>
    </div>
    <!-- Academic Window -->
    <div class="row">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col d-flex gap-3 align-items-center pt-3">
        <i class="bi bi-calendar4-week m-1"></i>
        <b style="font-size: large"> Academic Window</b>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <div class="ps-5 pt-2" v-html="academicCalendar"></div>
      </div>
    </div>
    <!-- climate -->
    <div class="row">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col py-3 d-flex gap-3">
        <i class="bi bi-thermometer-half m-1"></i>
        <span style="font-size: large"><b>Climate : </b> Cool</span>
      </div>
    </div>
    <!-- hr filler -->
    <div class="row">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col py-3">
        <h4>Description</h4>
        <p>{{ uniDesc }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5>No. of Slots</h5>
        <div class="ps-3 py-2">
          <p class="d-flex align-items-center gap-3">
            Semester 1: <b style="font-size: x-large">{{ numSlots1 }}</b>
          </p>
          <p class="d-flex align-items-center gap-3">
            Semester 2: <b style="font-size: x-large">{{ numSlots2 }}</b>
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4>General Info</h4>
        <ul style="list-style-type: none">
          <!-- conditional if accomodation provided -->
          <li class="my-4" v-if="hasAccom">
            <i style="font-size: 2rem" class="bi bi-house-door me-4"></i
            >Accomodation Provided
          </li>
          <!-- distance -->
          <li class="my-4">
            <i style="font-size: 2rem" class="bi bi-airplane me-4"></i
            >Proximity: ~{{ this.dist }}km
          </li>
          <!-- Language spoken -->
          <li class="my-4">
            <i style="font-size: 2rem" class="bi bi-translate me-4"></i
            >Language:
            <span v-for="lang in languages.slice(0, -1)" :key="lang">{{
              lang + ", "
            }}</span>
            <span>{{ languages.slice(-1)[0] }}</span>
          </li>
          <!-- Currency used -->
          <li class="my-4">
            <i style="font-size: 2rem" class="bi bi-currency-exchange me-4"></i
            >Currencies:
            <span v-for="curr in currencies.slice(0, -1)" :key="curr">{{
              curr + " "
            }}</span>
            <span>{{ currencies.slice(-1)[0] }}</span>
          </li>
          <!-- Website Url -->
          <li class="my-4">
            <i
              style="font-size: 2rem; margin-right: 18px"
              class="fa-solid fa-computer"
            ></i>
            <span
              >University page : <a :href="uniUrl">{{ uniUrl }}</a></span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <!-- module information -->
        <!-- GOOGLEMAP MAP API -->
        <div>
          <GoogleMap
            :lati="uniLat"
            :long="uniLong"
            :extras="nearbyLocation"
            :nearbyIcon="nearbyIcon"
          ></GoogleMap>
        </div>
        <h2 class="my-4">Module Information</h2>
        <span
          >University page > module info :
          <a :href="uniCourseUrl" target="_blank">{{ uniCourseUrl }}</a></span
        >
        <br />
        <!-- Module component -->
        <div class="container-fluid">
          <div class="row gap-3">
            <Module
              class="d-flex flex-wrap"
              v-for="(mod, index) in mods.slice(moduleStart, moduleEnd)"
              :key="index"
              :basket="mod.basket"
              :desc="mod.moduleInfo"
              :mod = "mod.module"
            ></Module>
          </div>
        </div>


        <!-- Pagination Modules -->
        <div class="row">
          <div class="col">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link moduleLink reviewLinks" @click="modulesTogglePage">Previous</a>
                </li>
                <!-- this part should be v-for based on no. of items in data -->
                <!-- they should be buttons that bind to v-model reviewCurrentPage-->
                <!-- paginated items should change as well , use array.slice(start,end)-->
                <!-- create a new component for paginated items  -->
                <li class="page-item">
                  <a class="page-link moduleLink reviewLinks active" @click="modulesTogglePage">1</a>
                </li>
                <template v-if="modulesLastPage>1">
                  <li class="page-item" v-for="num in modulesLastPage-1" :key="num">
                    <a class="page-link moduleLink reviewLinks" @click="modulesTogglePage">{{ num+1 }}</a>
                  </li>
                </template>
                <li class="page-item">
                  <a class="page-link moduleLink reviewLinks" @click="modulesTogglePage">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>


        <!-- one module each -->
        <div class="card my-4" style="width: 100%">
          <div class="card-body">
            <!-- module component -->

            <!-- module name -->
            <h5 class="card-title mb-3">Big Data Architecture</h5>
            <!-- basket type it fulfils -->
            <h6 class="card-subtitle mb-2 text-muted">Fintech Basket</h6>
            <!-- mod description -->
            <p class="card-text">
              this module teaches you about the in depth of technical analysis
              and predictive modelling
            </p>
            <div class="d-flex justify-content-between">
              <!-- add to fav -->
              <a href="#" class="btn btn-primary btn-sm">Favourite</a>
              <!-- link to mod info on uni page -->
              <!-- <a href="#" class="card-link me-3">more info</a> -->
            </div>
          </div>
        </div>
        <!-- next module -->
        <div class="card my-4" style="width: 100%">
          <div class="card-body">
            <!-- module component -->

            <!-- module name -->
            <h5 class="card-title mb-3">Big Data Architecture</h5>
            <!-- basket type it fulfils -->
            <h6 class="card-subtitle mb-2 text-muted">Fintech Basket</h6>
            <!-- mod description -->
            <p class="card-text">
              this module teaches you about the in depth of technical analysis
              and predictive modelling
            </p>
            <div class="d-flex justify-content-between">
              <!-- add to fav -->
              <a href="#" class="btn btn-primary btn-sm">Favourite</a>
              <!-- link to mod info on uni page -->
              <!-- <a href="#" class="card-link me-3">more info</a> -->
            </div>
          </div>
        </div>

        <div>
          <!-- Review component -->
          <div class="container-fluid px-4 mt-5">
            <div class="row mb-0">
              <div class="col d-flex align-items-center">
                <h2 class="mb-0">Reviews</h2>
              </div>
              <div class="col d-flex align-items-center justify-content-end">
                <div v-if="!isLoggedIn">
                  <h5>
                    You must be signed in to leave a review!
                    <router-link to="/SigninPage">sign in</router-link>
                  </h5>
                </div>
                <div v-else>
                  <h5 class="text-muted mb-0 me-2">Add a review
                    <button @click="showModal()" type="button" class="btn btn-light py-0 px-2 border-2">
                      <h4 class="mb-0">+</h4>
                    </button>
                    <!-- Dynamically opening and closing Modal based on actions performed and parent/child interactions-->
                    <Modal v-show="isModalOpen"
                    @close="closeModal()"
                    :uniNamePassed="uniName"
                    @review-done="closeModal()"
                    />
                  </h5>
                </div>
              </div>
            </div>

            <div
              v-if="this.reviews.length > 0 && this.isReviewsLoaded"
              class="row d-flex"
            >
              <div
                class="col-12 col-md-6"
                v-for="(review, index) in reviews.slice(reviewStart, reviewEnd)"
                :key="index"
              >
                <div class="card my-4">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title mb-2">{{ review.userName }}</h5>
                      <!-- <div>
                              Likes function kiv for now
                              <i @click="addLike()" class="fa fa-thumbs-up text-muted" style="font-size:15px; margin-right:2px"></i>
                              {{ review.likes }}
                            </div> -->
                    </div>
                    <h6 class="card-subtitle mb-2 text-muted">
                      Reviewed University: {{ review.uniName }}
                    </h6>
                    <p class="card-text">
                      {{ review.info }}
                    </p>
                    <div class="d-flex justify-content-between">
                      <p class="card-text mb-0">
                        <small class="text-muted">{{
                          review.currentTime
                        }}</small>
                      </p>
                      <!-- More info function to be done if theres time -->
                      <!-- <a href="#" class="card-link me-3 mb-0">more info</a> -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pagination Reviews -->
              <div class="row">
                <div class="col">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                      <li class="page-item">
                        <a class="page-link reviewLinks" @click="reviewTogglePage">Previous</a>
                      </li>
                      <!-- this part should be v-for based on no. of items in data -->
                      <!-- they should be buttons that bind to v-model reviewCurrentPage-->
                      <!-- paginated items should change as well , use array.slice(start,end)-->
                      <!-- create a new component for paginated items  -->
                      <li class="page-item">
                        <a class="page-link reviewLinks active" @click="reviewTogglePage">1</a>
                      </li>
                      <template v-if="reviewLastPage>1">
                        <li class="page-item" v-for="num in reviewLastPage-1" :key="num">
                          <a class="page-link reviewLinks" @click="reviewTogglePage">{{ num+1 }}</a>
                        </li>
                      </template>
                      <li class="page-item">
                        <a class="page-link reviewLinks" @click="reviewTogglePage">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>







            </div>

            <div
              v-if="this.reviews.length == 0 && this.isReviewsLoaded"
              class="row d-flex mt-3 mb-4"
            >
              <div
                class="col-sm-12 col-md-6 col-lg-4 flex-grow-1 flex-shrink-1"
              >
                There are no reviews for {{ uniName }} yet, would you like to be
                the first to add one {{ name }}?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div>{{ places }}</div> -->
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
import Module from "@/components/Module.vue";
// console.log(import.meta.env.VITE_GOOGLE_MAP_API_KEY);
import { fireStore } from "@/service/Firebase/firebaseInit";
import {
  collection,
  collectionGroup,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Modal from "@/components/Modal.vue";
import FavBtn from "@/components/FavBtn.vue";
import axios from "axios";

const auth = getAuth();
const user = auth.currentUser;

export default {
  name: "UniPage",
  data() {
    return {
      // We not using the igpa format anymore liao btw elton
      country: "",
      region: "",
      languages: ["English"],
      currencies: [],
      uniLat: "",
      uniLng: "",
      igpaTen: "",
      igpaNinety: "",
      uniName: "",
      academicCalendar: "",
      gpaReq: "",
      uniDesc: "",
      uniImgArr: [],
      uniUrl: "",
      uniIcon: "",
      uniDesc: "",
      hasAccom: "",
      uniCourseUrl: "",
      uniRanking: "",
      numSlots1: "",
      numSlots2: "",
      mods: [],
      name: "",
      uniLat: 0,
      uniLong: 0,
      isLoggedIn: false,
      user: auth.currentUser,
      reviews: [],
      email: "",
      info: "",
      likes: 0,
      userName: "",
      isModalOpen: false,
      isReviewsLoaded: false,
      currentUserLeftReview: false,
      places: [],
      nearbyLocation: [],
      nearbyIcon: [],
      // items per page set to default
      reviewsPerPage: 2,
      // this will be v-modelled to change according to what user clicks
      reviewCurrentPage: 1,
      reviewFirstPage: 1,
      reviewLastPage: 0,
      // items per page set to default
      modulePerPage: 4,
      // this will be v-modelled to change according to what user clicks
      modulesCurrentPage: 1,
      modulesFirstPage: 1,
      modulesLastPage: 0,
    };
  },
  components: {
    GoogleMap,
    Module,
    Modal,
    FavBtn,
  },
  computed: {
    dist() {
      return this.getDistanceFromLatLonInKm(
        1.2963569034140912,
        103.8500945527462,
        this.uniLat,
        this.uniLng
      );
    },
    moduleStart() {
      return (this.modulesCurrentPage - 1) * this.modulePerPage;
    },
    moduleEnd() {
      return this.moduleStart + this.modulePerPage;
    },
    reviewStart() {
      return (this.reviewCurrentPage - 1) * this.reviewsPerPage;
    },
    reviewEnd() {
      return this.reviewStart + this.reviewsPerPage;
    },
  },
  created() {
    this.uniName = this.$route.params.name;
    this.getUniInfo();
    this.getReviewInfo();
    this.getModuleInfo();
    this.checkForUser();

  },
  mounted() {
  },
  methods: {
    // Pagination for modules
    modulesPagination() {
      const pagelinks = document.getElementsByClassName("moduleLink");

      this.modulesLastPage = Math.ceil(this.mods.length / this.modulePerPage);
      this.modulesCurrentPage = 1
      // if filtering reduces the pages to 1, disable previous and next
      if (this.lastPage == 1){
        for (const li of pagelinks) {
          if (li.text == 'Previous'){
              li.classList.add('disabled')
          } else if (li.text == 'Next'){
              li.classList.add('disabled')
          } else if (parseInt(li.text) == this.currentPage){
              li.classList.add('active')
          }
      }}
      // if filtering does not reduce the page to 1, disable previous only
      else {
        for (const li of pagelinks) {
          if (li.text == 'Previous'){
              li.classList.add('disabled')
          } else if (li.text == 'Next'){
              li.classList.remove('disabled')
          } else if (parseInt(li.text) == this.currentPage){
              li.classList.add('active')
          }
      }
      }
    },
    modulesTogglePage: function () {
      // moves to next pg or previous pg based on button clicked
      if (event.target.text == "Previous") {
        if (this.modulesCurrentPage != 1) {
          this.modulesCurrentPage -= 1;
        }
      } else if (event.target.text == "Next") {
        if (this.modulesCurrentPage != this.modulesLastPage + 1) {
          this.modulesCurrentPage += 1;
        }
      } else {
        this.modulesCurrentPage = parseInt(event.target.text);
      }
      const pagelinks = document.getElementsByClassName("moduleLink");

      // toggles active and disabled buttons

      // goes through the pagination buttons and removes all active classes
      // also checks if modulesCurrentPage == 1, then add disbaled class to previous btn
      // also if modulesCurrentPage == last, then add disabled class to next btn

      for (const li of pagelinks) {
        li.classList.remove("active");
        li.classList.remove("disabled");

        if (parseInt(li.text) === this.modulesCurrentPage) {
          console.log(li.text);
          li.classList.add("active");
        }
        if (li.text == 'Previous' && this.modulesCurrentPage==this.modulesFirstPage){
            li.classList.add('disabled')
        } else if (li.text == 'Next' && this.modulesCurrentPage==this.modulesLastPage){
            li.classList.add('disabled')
        } else if (parseInt(li.text) == this.modulesCurrentPage){
            event.target.classList.add('active')
        }
      }
    },


    // Pagination for reviews
    reviewPagination() {
      const pagelinks = document.getElementsByClassName("reviewLinks");

      this.reviewLastPage = Math.ceil(this.reviews.length / this.reviewsPerPage);
      console.log(this.reviewLastPage)
      this.reviewCurrentPage = 1
      // if filtering reduces the pages to 1, disable previous and next
      if (this.reviewLastPage == 1){
        for (const li of pagelinks) {
          if (li.text == 'Previous'){
              li.classList.add('disabled')
          } else if (li.text == 'Next'){
              li.classList.add('disabled')
          } else if (parseInt(li.text) == this.reviewCurrentPage){
              li.classList.add('active')
          }
      }}
      // if filtering does not reduce the page to 1, disable previous only
      else {
        for (const li of pagelinks) {
          if (li.text == 'Previous'){
              li.classList.add('disabled')
          } else if (li.text == 'Next'){
              li.classList.remove('disabled')
          } else if (parseInt(li.text) == this.reviewCurrentPage){
              li.classList.add('active')
          }
      }
      }
    },
    reviewTogglePage: function () {
      // moves to next pg or previous pg based on button clicked
      if (event.target.text == "Previous") {
        if (this.reviewCurrentPage != 1) {
          this.reviewCurrentPage -= 1;
        }
      } else if (event.target.text == "Next") {
        if (this.reviewCurrentPage != this.reviewLastPage + 1) {
          this.reviewCurrentPage += 1;
        }
      } else {
        this.reviewCurrentPage = parseInt(event.target.text);
      }
      const pagelinks = document.getElementsByClassName("reviewLinks");

      // toggles active and disabled buttons

      // goes through the reviewPagination buttons and removes all active classes
      // also checks if reviewCurrentPage == 1, then add disbaled class to previous btn
      // also if reviewCurrentPage == last, then add disabled class to next btn

      for (const li of pagelinks) {
        li.classList.remove("active");
        li.classList.remove("disabled");

        if (parseInt(li.text) === this.reviewCurrentPage) {
          console.log(li.text);
          li.classList.add("active");
        }
        if (li.text == 'Previous' && this.reviewCurrentPage==this.reviewFirstPage){
            li.classList.add('disabled')
        } else if (li.text == 'Next' && this.reviewCurrentPage==this.reviewLastPage){
            li.classList.add('disabled')
        } else if (parseInt(li.text) == this.reviewCurrentPage){
            event.target.classList.add('active')
        }
      }
    },





    //Fetch nearby places on pageload using PlacesAPI
    async getNearbyAttr() {
      const proxyURL = "https://peaceful-sierra-78205.herokuapp.com/";
      var strLocation = this.uniLat + "," + this.uniLong;
      let config = {
        method: "get",
        url:
          proxyURL +
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
        params: {
          // location: "43.66093,-79.3959",
          location: strLocation,
          radius: "2000",
          type: "tourist_attraction",
          key: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
        },
        headers: {
        },
      };
      try {
        const response = await axios.request(config);
        // console.log(response.data.results);
        this.places = response.data.results;
        if (this.places.length > 10) {
          for (let i = 0; i < 10; i++) {
            this.nearbyIcon.push(this.places[i].icon);
            this.nearbyLocation.push({
              position: {
                lat: this.places[i].geometry.location.lat,
                lng: this.places[i].geometry.location.lng,
              },
            });
          }
        } else {
          for (let i = 0; i < this.places.length; i++) {
            this.nearbyIcon.push(this.places[i].icon);
            this.nearbyLocation.push({
              position: {
                lat: this.places[i].geometry.location.lat,
                lng: this.places[i].geometry.location.lng,
              },
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    // Get Uni Info
    async getUniInfo() {
      let q = query(
        collection(fireStore, "Universities2"),
        where("HostUniversity", "==", this.uniName)
      );
      let getDegreeUni = await getDocs(q);
      getDegreeUni.forEach((doc) => {
        // console.log(doc.data())
        this.uniLat = doc.data().UniLatitude;
        this.uniLong = doc.data().UniLongtitude;
        var tempCal = doc.data().AcademicCalendar.split("/n");
        for (let item of tempCal.slice(0, -1)) {
          item = item.split(":");
          this.academicCalendar +=
            `<span style="font-weight:bold;">${item[0]} : </span>` +
            item[1].replace("/n", "") +
            "<br><br>";
        }
        // region
        this.region = doc.data().Region;
        // country
        this.country = doc.data().Country;
        // Gpa
        if (doc.data()["GPA"] == null) {
          this.gpaReq = "NA";
        } else {
          this.gpaReq = doc.data()["GPA"].toFixed(1);
        }
        // Uni Desc
        this.uniDesc = doc.data().UniDescription;
        // Uni Url
        this.uniUrl = doc.data().UniWebsiteLink;
        // Uni Name
        this.uniName = doc.data().HostUniversity;
        // // Uni Accom boolean
        this.hasAccom = doc.data().Accommodation;
        // Uni images

        for (let i = 1; i < 8; i++) {
          let key = `UniImageLink${i}`;
          var val = doc.data()[key];
          console.log(val);
          if (val != null && val.trim() != null && val != "'") {
            this.uniImgArr.push(doc.data()[key]);
          }
        }
        // Uni exchange spots
        this.numSlots1 = doc.data().NoOfPlacesSem1;
        this.numSlots2 = doc.data().NoOfPlacesSem2;
        // Uni coords
        this.uniLat,
          (this.uniLng = doc.data().UniLatitude),
          doc.data().UniLongitude;
        // // igpa info
        this.igpaTen = doc.data().iGpaTen;
        this.igpaNinety = doc.data().iGpaNinety;
        // Uni Nearby Attractions
        this.getNearbyAttr();
        // // Uni course url
        // this.uniCourseUrl = doc.data().CourseCatalogLink
        // // World Ranking
        // this.uniRanking = doc.data().WorldRanking
        this.getLangauageCurrencyFromCountry();
      });
    },

    // Get Mod Info
    async getModuleInfo(){
      var baskets = []
      let q = query(
        collection(fireStore, "BasketToUniversities")
      );
      let getBaskets = await getDocs(q);
      getBaskets.forEach((doc) => {
        var uniList = doc.data().Universities
        if (uniList.includes(this.uniName)){
          baskets.push(doc.id)
        }
      });
      var modules = []
      let e = query(
        collection(fireStore, "BasketToModules")
      );
      let getModule = await getDocs(e);
      let t = query(
        collection(fireStore, "ModuleToInfo")
      );
      let getInfo = await getDocs(t);
      for (let item of baskets){
        getModule.forEach((doc) => {
          if(item == doc.data().Baskets){
            var infoTemp = ''
            getInfo.forEach((info) => {
              if(doc.data().Modules == info.data()['Module Name']){
                infoTemp = info.data()['Module Info']
              }
            });
            let temp = {
              basket: item,
              module: doc.data().Modules,
              moduleInfo: infoTemp
            }
            modules.push(temp)
          }
        });
      }
      for ( let mod of modules){
        this.mods.push(mod)
      }

      this.modulesPagination()
    },
    // async getModuleInfo() {
    //   let q = query(
    //     collection(fireStore, "Modules"),
    //     where("UniversityName", "==", this.uniName)
    //   );
    //   let getModuleUni = await getDocs(q);
    //   getModuleUni.forEach((doc) => {
    //     let mod = {};
    //     mod["year"] = doc.data().AY;
    //     mod["desc"] = doc.data().Description;
    //     mod["difficulty"] = doc.data().Difficulty;
    //     mod["faculty"] = doc.data().Faculty;
    //     mod["url"] = doc.data().LinkToCourseOutline;
    //     mod["id"] = doc.data().ModuleId;
    //     mod["name"] = doc.data().ModuleName;
    //     mod["popularity"] = doc.data().Popularity;
    //     mod["sem"] = doc.data().Semester;
    //     this.mods.push(mod);
    //   });
    //   this.modulesPagination()
    // },

    // Check for current logged in user or if there isnt one
    async checkForUser() {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          this.isLoggedIn = true;
          console.log("logged in user from previous page is", user);

          const name = user.email.split("@")[0];
          const firstLetter = name.charAt(0);
          const firstLetterCap = firstLetter.toUpperCase();
          const remainingLetters = name.slice(1);
          this.name = firstLetterCap + remainingLetters;
          this.email = user.email
        }
      });
    },

    // Pulls review data from firebase and auto populates review section specific to each uniInfo page
    async getReviewInfo() {
      const name = this.uniName;
      const review = `${name} Reviews`;

      let q = query(collectionGroup(fireStore, review));
      let getUniReviews = await getDocs(q);
      getUniReviews.forEach((doc) => {
        let currentUserEmail = this.email
        let review = {};

        review["email"] = doc.data().Email;
        review["likes"] = doc.data().Likes;
        review["info"] = doc.data().ReviewInfo;
        review["uniName"] = doc.data().UniName;
        review["userName"] = doc.data().UserName;
        review["currentTime"] = doc.data().currentTime;
        this.reviews.push(review);

        if (currentUserEmail == doc.data().Email){
          this.currentUserLeftReview = true
          console.log('current user has left review before')
        }
      });
      console.log(getUniReviews.docs.length);
      this.isReviewsLoaded = true;
      this.reviewPagination()
    },

    async getLangauageCurrencyFromCountry() {
      // console.log('country is: ',this.country)
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${this.country}?fields=capital,currencies,languages`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const languages = data[0]["languages"];
      const currencies = data[0]["currencies"];
      for (let key in languages) {
        if (!this.languages.includes(languages[key])) {
          this.languages.push(languages[key]);
        }
      }
      for (let key in currencies) {
        let currencyObj = currencies[key];
        this.currencies.push(currencyObj["name"], currencyObj["symbol"]);
      }
    },
    // used to calculate the proximity of destination university from Singapore
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
      var dLon = this.deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) *
          Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return Math.floor(d / 100) * 100;
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180);
    },
    // Sharing social links
    fbs_click() {
      var pageLink = window.location.href;
      var pageTitle = String(document.title).replace("/&/g", "%26");
      window.open(
        `http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,
        "sharer",
        "toolbar=0,status=0,width=626,height=436"
      );
      return false;
    },
    tbs_click() {
      var pageLink = window.location.href;
      var pageTitle = String(document.title).replace("/&/g", "%26");
      window.open(
        `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,
        "sharer",
        "toolbar=0,status=0,width=626,height=436"
      );
      return false;
    },
    lbs_click() {
      var pageLink = window.location.href;
      var pageTitle = String(document.title).replace("/&/g", "%26");
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`,
        "sharer",
        "toolbar=0,status=0,width=626,height=436"
      );
      return false;
    },
    // Dynamically opens modal and calls upon modal component
    showModal() {
      if(this.currentUserLeftReview){
        alert("Hi " + this.name + ", each user can only leave 1 review per university page."
        + "\n\n" + "Take note that adding another will replace your existing review!")
      }
      console.log("modal opened from uniInfo");
      this.isModalOpen = true;
    },

    // Closes the modal when adding of review function has been completed
    closeModal() {
      console.log("modal closed from uniInfo");
      this.isModalOpen = false;
    },
  },
};
</script>
