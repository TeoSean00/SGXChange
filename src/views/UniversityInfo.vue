<template>
  <div
    class="container-fluid"
    style="max-width: fit-content; margin-left: 8rem; margin-right: 8rem"
  >
    <FavBtn :uniName="uniName"></FavBtn>
  </div>
  <div
    class="container-fluid"
    style="max-width: fit-content; margin-left: 8rem; margin-right: 8rem"
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
          <a class="bi bi-twitter fs-4" @click="tbs_click"  target="_blank">
          </a>
          <!-- LINKEDIN -->
          <a class="bi bi-linkedin fs-4" @click="lbs_click"  target="_blank">
          </a>
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
        <a href="#" class="text-dark mx-1">90 Reviews</a>
        <a href="#" class="text-bold mx-1">{{region}}∙{{country}}</a>
      </div>
      <div class="col-6"></div>
    </div>
    <div class="row mb-5">
      <div class="col-8">
        <div id="carouselExampleIndicators" class="carousel slide" style="width:640px;height:460px;" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" v-for="img,idx of uniImgArr" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="idx" class="active" aria-current="true" :aria-label="'Slide '+idx"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" v-for="img of uniImgArr">
              <img :src="img" class="d-block w-100" style="width:640px;height:460px;" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-4">
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
            <i style="font-size: 2rem" class="bi bi-airplane me-4"></i>Proximity: ~{{this.dist}}km
          </li>
          <!-- Language spoken -->
          <li class="my-4">
            <i style="font-size: 2rem" class="bi bi-translate me-4"></i>Language: <span v-for="lang in languages.slice(0,-1)">{{lang+', '}}</span>
            <span>{{languages.slice(-1)[0]}}</span>
          </li>
          <!-- Currency used -->
          <li class="my-4">
            <i style="font-size: 2rem" class="bi bi-currency-exchange me-4"></i>Currencies: <span v-for="curr in currencies.slice(0,-1)">{{curr+' '}}</span>
            <span>{{currencies.slice(-1)[0]}}</span>
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
              v-for="(mod, index) in mods"
              :key="index"
              :year="mod.year"
              :desc="mod.desc"
              :difficulty="mod.difficulty"
              :faculty="mod.faculty"
              :url="mod.url"
              :id="mod.id"
              :name="mod.name"
              :popularity="mod.popularity"
              :sem="mod.sem"
            ></Module>
          </div>
        </div>

        <!-- one module each -->
        <div class="card my-4" style="width: 30rem">
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
              <a href="#" class="card-link me-3">more info</a>
            </div>
          </div>
        </div>
        <!-- next module -->
        <div class="card my-4" style="width: 30rem">
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
              <a href="#" class="card-link me-3">more info</a>
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
                <h5 class="text-muted mb-0 me-2">Add a review</h5>
                <button
                  @click="showModal()"
                  type="button"
                  class="btn btn-light py-0 px-2 border-2"
                >
                  <h4 class="mb-0">+</h4>
                </button>
                <!-- Dynamically opening and closing Modal based on actions performed and parent/child interactions-->
                <Modal
                  v-show="isModalOpen"
                  @close="closeModal()"
                  :uniNamePassed="uniName"
                  @review-done="closeModal()"
                />
              </div>
            </div>
  
            <div v-if="this.reviews.length>0 && this.isReviewsLoaded" class="row d-flex">
              <div class='col-sm-12 col-md-6 col-lg-4 flex-grow-1 flex-shrink-1' v-for="(review, index) in reviews"
                :key="index">
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
                      <a href="#" class="card-link me-3 mb-0">more info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="this.reviews.length==0 && this.isReviewsLoaded"
            class="row d-flex mt-3 mb-4">
              <div class='col-sm-12 col-md-6 col-lg-4 flex-grow-1 flex-shrink-1'>
                There are no reviews for {{uniName}} yet, would you like to be the first to add one {{name}}?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>{{ places }}</div>
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
      country: '',
      region: '',
      languages: ['English'],
      currencies:[],
      uniLat: '',
      uniLng: '',
      igpaTen: '',
      igpaNinety: '',
      uniName: '',
      academicCalendar: '',
      gpaReq: '',
      uniDesc: '',
      uniImgArr: [],
      uniUrl: '',
      uniIcon: '',
      uniDesc: '',
      hasAccom: '',
      uniCourseUrl: '',
      uniRanking: '',
      numSlots1: '',
      numSlots2: '',
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
      // isThereReviews: false,
      places: [],
      nearbyLocation: [],
    };
  },
  components: {
    GoogleMap,
    Module,
    Modal,
    FavBtn,
  },
  computed: {
    dist(){
      return this.getDistanceFromLatLonInKm(1.2963569034140912, 103.8500945527462,this.uniLat,this.uniLng)
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
    // this.places = this.getNearbyPlaces();
    // console.log(this.places);
    // console.log(this.getNearbyPlaces());
    // console.log("hello?");
    // this.getNearbyPlaces();
  },

  // mounted(){
  //   // this.checkForReviews()
  //   // console.log('reviews?', this.isThereReviews, 'reviews loaded?', this.isReviewsLoaded)
  // },
  // updated(){
  //   this.checkForReviews()
  // },
  methods: {
    // checkForReviews(){
    //   if(this.isReviewsLoaded){
    //     if(this.reviews.length>0){
    //       console.log('reviews loaded and no. of reviews are', this.reviews.length)
    //       this.isThereReviews = true
    //     }
    //     else{
    //       console.log('reviews loaded and no. of reviews are', this.reviews.length, '; no reviews for this uni')
    //       this.isThereReviews = false
    //     }
    //   }
    // },

    //Fetch nearby places on pageload using PlacesAPI
    async getNearbyAttr() {
      const proxyURL = "https://peaceful-sierra-78205.herokuapp.com/";
      var strLocation = this.uniLat + "," + this.uniLong;
      console.log("strLocation is below");
      console.log(strLocation);
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
          // "Access-Control-Allow-Origin": "*",
        },
      };
      console.log(this.places);
      try {
        const response = await axios.request(config);
        // console.log(response.data.results);
        this.places = response.data.results;
        if (this.places.length > 10) {
          for (let i = 0; i < 10; i++) {
            this.nearbyLocation.push({
              position: {
                lat: this.places[i].geometry.location.lat,
                lng: this.places[i].geometry.location.lng,
              },
            });
          }
        } else {
          for (let i = 0; i < this.places.length; i++) {
            this.nearbyLocation.push({
              position: {
                lat: this.places[i].geometry.location.lat,
                lng: this.places[i].geometry.location.lng,
              },
            });
          }
        }

        console.log(this.places);
      } catch (err) {
        console.log(err);
      }
    },
    // Get Uni Info
    async getUniInfo() {
      let q = query(collection(fireStore, "Universities2"), where("HostUniversity", "==", this.uniName))
      let getDegreeUni = await getDocs(q)
      getDegreeUni.forEach((doc) => {
        // console.log(doc.data())
        this.uniLat = doc.data().UniLatitude;
        this.uniLong = doc.data().UniLongtitude;
        var tempCal = doc.data().AcademicCalendar.split('/n')
        for (let item of tempCal.slice(0,-1)){
          item = item.split(':')
          this.academicCalendar += `<span style="font-weight:bold;">${item[0]} : </span>` + item[1].replace('/n', '') + "<br><br>"
        }
        // region
        this.region = doc.data().Region
        // country
        this.country = doc.data().Country
        console.log(this.country,'country')
        // Gpa
        if (doc.data()['GPA'] == null){
          this.gpaReq = 'NA'
        } else{
          this.gpaReq = doc.data()['GPA'].toFixed(1)
        }
        // Uni Desc
        this.uniDesc = doc.data().UniDescription;
        // Uni Url
        this.uniUrl = doc.data().UniWebsiteLink;
        // Uni Name
        this.uniName = doc.data().HostUniversity;
        // // Uni Accom boolean
        this.hasAccom = doc.data().Accommodation
        // Uni images 
        for (let i=1;i<8;i++){
          let key = `UniImageLink${i}`
          var val = doc.data()[key]
          console.log(val)
          if (val!=null && val.trim()!=null && val!="'"){
            this.uniImgArr.push(doc.data()[key])
          }
        }
        // Uni exchange spots
        this.numSlots1 = doc.data().NoOfPlacesSem1
        this.numSlots2 = doc.data().NoOfPlacesSem2
        // Uni coords
        this.uniLat, this.uniLng = doc.data().UniLatitude, doc.data().UniLongitude
        // // igpa info
        this.igpaTen = doc.data().iGpaTen
        this.igpaNinety = doc.data().iGpaNinety
        // Uni Nearby Attractions
        this.getNearbyAttr();
        // // Uni course url
        // this.uniCourseUrl = doc.data().CourseCatalogLink
        // // World Ranking
        // this.uniRanking = doc.data().WorldRanking
        this.getLangauageCurrencyFromCountry()
      });
    },

    // Get Mod Info
    async getModuleInfo() {
      let q = query(
        collection(fireStore, "Modules"),
        where("UniversityName", "==", this.uniName)
      );
      let getModuleUni = await getDocs(q);
      getModuleUni.forEach((doc) => {
        let mod = {}
        mod['year'] = doc.data().AY
        mod['desc'] = doc.data().Description
        mod['difficulty'] = doc.data().Difficulty
        mod['faculty'] = doc.data().Faculty
        mod['url'] = doc.data().LinkToCourseOutline
        mod['id'] = doc.data().ModuleId
        mod['name'] = doc.data().ModuleName
        mod['popularity'] = doc.data().Popularity
        mod['sem'] = doc.data().Semester
        this.mods.push(mod)
      });
    },

    // Check for current logged in user or if there isnt one
    checkForUser() {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          this.isLoggedIn = true;
          console.log("logged in user from previous page is", user);

          const name = user.email.split("@")[0];
          const firstLetter = name.charAt(0);
          const firstLetterCap = firstLetter.toUpperCase();
          const remainingLetters = name.slice(1);
          this.name = firstLetterCap + remainingLetters;
        }
      });
    },

    // Pulls review data from firebase and auto populates review section specific to each uniInfo page
    async getReviewInfo() {
      const name = this.uniName
      const review = `${name} Reviews`
      // console.log('uniname and its review collection is', name, review)

      let q = query(collectionGroup(fireStore, review));
      let getUniReviews = await getDocs(q);
      getUniReviews.forEach((doc) => {
        // console.log(`${name} review info is`, doc.data())
        let review = {}
        review['email'] = doc.data().Email
        review['likes'] = doc.data().Likes
        review['info'] = doc.data().ReviewInfo
        review['uniName'] = doc.data().UniName
        review['userName'] = doc.data().UserName
        review['currentTime'] = doc.data().currentTime
        this.reviews.push(review)
        // console.log(review, this.reviews)
      });
      console.log(getUniReviews.docs.length)
      this.isReviewsLoaded = true
    },
    async getLangauageCurrencyFromCountry(){
      // console.log('country is: ',this.country)
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${this.country}?fields=capital,currencies,languages`
      )
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      const languages = data[0]['languages']
      const currencies = data[0]['currencies']
      for (let key in languages){
        if (!this.languages.includes(languages[key])){
          this.languages.push(languages[key])
        }
      } for (let key in currencies){
        let currencyObj = currencies[key]
        this.currencies.push(currencyObj['name'],currencyObj['symbol'])
      }

    },
    // used to calculate the proximity of destination university from Singapore
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return Math.floor(d/100)*100;
    },
    deg2rad(deg) {
      return deg * (Math.PI/180)
    },    
    // Sharing social links
    fbs_click(){
      var pageLink = window.location.href;
      var pageTitle = String(document.title).replace('/\&/g', '%26')
      window.open(`http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,'sharer','toolbar=0,status=0,width=626,height=436');return false;
    },
    tbs_click(){
      var pageLink = window.location.href;
      var pageTitle = String(document.title).replace('/\&/g', '%26')
      window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false;
    },
    lbs_click(){
      var pageLink = window.location.href
      var pageTitle = String(document.title).replace('/\&/g', '%26')
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false
    },
    // Dynamically opens modal and calls upon modal component
    showModal() {
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
