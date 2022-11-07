<template>
  <div class="container-fluid" style="max-width:fit-content;margin-left:8rem;margin-right:8rem;">
  <FavBtn :uniName="uniName"></FavBtn>
      <div class="container-fluid" style="max-width:fit-content;margin-left:8rem;margin-right:8rem;">
    <div class="row mb-3">
      <div class="col h2">{{ uniName }}</div>
    </div>
    <div class="row mb-3">
      <div class="col-4">
        <div class="d-inline me-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill"
            viewBox="0 0 16 16">
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          4.64
        </div>
        <a href="#" class="text-dark mx-1">90 Reviews</a>
        <a href="#" class="text-dark mx-1">City∙Country</a>
      </div>
      <div class="col-4"></div>
      <div class="col-2 text-end">
        <span class="mx-1"><i class="bi bi-upload m-1"></i><a href="/" class="text-dark">Share</a></span>
        <span class="mx-1"><i class="bi bi-download m-1"></i><a href="/" class="text-dark"> Save</a></span>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-6">
        <img src="../assets/440px-University_of_St._Gallen_EUR-HSG_Institute_Building.jpg" class="w-100" style=""
          alt="uni-display" />
      </div>
      <div class="col-2">
        <img src="../assets/440px-University_of_St._Gallen_Convention_and_Executive_Education_Center.jpg"
          class="w-100 mb-2" alt="" />
        <img src="../assets/a29feeb0-0635-4dc0-a247-e77a0f254dbd.webp" class="w-100" alt="" />
      </div>
      <div class="col-2">
        <img src="../assets/311ca332-dcb2-4b66-945c-ded8712a3543.webp" class="w-100 mb-2" alt="" />
        <img src="../assets/HSG-SQUARE-2000x1125.jpeg" class="w-100" style="width: 18rem" alt="" />
      </div>
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
        <b style="font-size: large;">Gpa Info </b>
      </div>
    </div>
    <div class="row">
      <div class="col py-3">
        <div class="ps-5 pt-2 d-flex flex-column gap-4">
          <span><b>Min Gpa : </b>{{ gpaReq }}</span>
          <b>10th/90th Percentile :
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
        <b style="font-size: large;"> Academic Window</b>
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
        <span style="font-size: large;"><b>Climate : </b> Cool</span>
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
          <p class="d-flex align-items-center gap-3">Semester 1: <b style="font-size:x-large">{{ numSlots1 }}</b></p>
          <p class="d-flex align-items-center gap-3">Semester 2: <b style="font-size:x-large">{{ numSlots2 }}</b></p>
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
            <i style="font-size: 2rem" class="bi bi-house-door me-4"></i>Accomodation Provided
          </li>
          <!-- distance -->
          <li class="my-4">
            <i style="font-size: 2rem" class="bi bi-airplane me-4"></i>Proximity: ~3500km
          </li>
          <!-- Language spoken -->
          <li class="my-4">
            <i style="font-size: 2rem" class="bi bi-translate me-4"></i>Language: English, Portugese, Spanish
          </li>
          <!-- Website Url -->
          <li class="my-4">
            <i style="font-size: 2rem; margin-right:18px ;" class="fa-solid fa-computer"></i>
            <span>University page : <a :href="uniUrl">{{ uniUrl }}</a></span>
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
        <!-- <div>
                <GoogleMap :uniName="uniName"></GoogleMap>
              </div> -->
        <h2 class="my-4">Module Information</h2>
        <span>University page > module info : <a :href="uniCourseUrl" target="_blank">{{ uniCourseUrl }}</a></span>
        <br>
        <!-- Module component -->
        <div class="container-fluid">
          <div class="row gap-3">
            <Module class='d-flex flex-wrap' v-for="(mod, index) in mods" :key="index" :year="mod.year" :desc="mod.desc"
              :difficulty="mod.difficulty" :faculty="mod.faculty" :url="mod.url" :id="mod.id" :name="mod.name"
              :popularity="mod.popularity" :sem="mod.sem"></Module>
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
                <button @click="showModal()" type="button" class="btn btn-light py-0 px-2 border-2">
                  <h4 class="mb-0">+</h4>
                </button>
                <!-- Dynamically opening and closing Modal based on actions performed and parent/child interactions-->
                <Modal v-show="isModalOpen" @close="closeModal()" :uniNamePassed="uniName"
                  @review-done="closeModal()" />
              </div>
            </div>

            <!-- Dynamic display portion to be fixed, nd account for when after fb data loads -->
            <div v-show="isThereReviews && isReviewsLoaded" class="row d-flex">
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
                    <h6 class="card-subtitle mb-2 text-muted">Reviewed University: {{ review.uniName }}</h6>
                    <p class="card-text">
                      {{ review.info }}
                    </p>
                    <div class="d-flex justify-content-between">
                      <p class="card-text mb-0"><small class="text-muted">{{ review.currentTime }}</small></p>
                      <!-- More info function to be done if theres time -->
                      <a href="#" class="card-link me-3 mb-0">more info</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Dynamic display portion to be fixed, nd account for when after fb data loads -->
            <div v-show="!isThereReviews && isReviewsLoaded" class="row d-flex">
              <div class='col-sm-12 col-md-6 col-lg-4 flex-grow-1 flex-shrink-1'>
                No reviews for this university yet, would you like to add one?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";
import Module from "@/components/Module.vue"
// console.log(import.meta.env.VITE_GOOGLE_MAP_API_KEY);
import { fireStore } from "@/service/Firebase/firebaseInit"
import { collection, collectionGroup, getDocs, query, where, orderBy} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Modal from '@/components/Modal.vue';

const auth = getAuth();
const user = auth.currentUser;

import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import FavBtn from "@/components/FavBtn.vue";


export default {
  name: "UniPage",
  data() {
    return {
      // We not using the igpa format anymore liao btw elton
      igpaTen: '',
      igpaNinety: '',
      uniName: '',
      academicCalendar: '',
      gpaReq: '',
      uniDesc: '',
      uniUrl: '',
      uniIcon: '',
      uniDesc: '',
      hasAccom: '',
      uniCourseUrl: '',
      uniRanking: '',
      numSlots1: '',
      numSlots2: '',
      mods: [],
      name: '',
      isLoggedIn: false,
      user: auth.currentUser,
      reviews: [],
      email: '',
      info: '',
      likes: 0,
      userName: '',
      isModalOpen: false,
      isReviewsLoaded: false,
      isThereReviews: false,
    }
  },
  components: {
    GoogleMap,
    Module,
    Modal
    FavBtn,
  },
  computed: {
    gpaReq() {
      if (this.gpaReq == null){
        return 'NA'
      } return this.gpaReq
    },
  },
  created(){
    this.uniName = this.$route.params.name
    this.getUniInfo()
    this.getReviewInfo()
    this.getModuleInfo()
    this.checkForUser()
    // console.log(this.uniName)
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

    // Get Uni Info
    async getUniInfo() {
      let q = query(collection(fireStore, "Universities"), where("HostUniversity", "==", this.uniName))
      let getDegreeUni = await getDocs(q)
      getDegreeUni.forEach((doc) => {
        // console.log(doc.data())
        // Academic Cal (Remove temp because breaks code)
        // var tempCal = doc.data().AcademicCalendar.split('\n')
        // for (let item of tempCal){
        //   item = item.split(':')
        //   this.academicCalendar += `<span style="font-weight:bold;">${item[0]} : </span>` + item[1].replace('/n', '') + "<br><br>"
        // }
        // Gpa
        this.gpaReq = doc.data()['GPA']
        // Uni Icon URL
        this.uniIcon = doc.data().Icon
        // Uni Desc
        this.uniDesc = doc.data().UniDescription
        // Uni Url
        this.uniUrl = doc.data().UniWebsiteLink
        // Uni Name
        this.uniName = doc.data().HostUniversity
        // // Uni Accom boolean
        // this.hasAccom = doc.data().Accommodation
        // // Uni course url
        // this.uniCourseUrl = doc.data().CourseCatalogLink
        // // World Ranking
        // this.uniRanking = doc.data().WorldRanking
        // Uni exchange spots
        this.numSlots1 = doc.data().NoOfPlacesSem1
        this.numSlots2 = doc.data().NoOfPlacesSem2
        // // igpa info
        // this.igpaTen = doc.data().IgpaTenPercentile
        // this.igpaNinety = doc.data().IgpaNinetyPercentile
        // console.log(this.numSlots1)
      });
    },

    // Get Mod Info
    async getModuleInfo() {
      let q = query(collection(fireStore, "Modules"), where("UniversityName", "==", this.uniName))
      let getModuleUni = await getDocs(q)
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
        console.log(mod)
        this.mods.push(mod)
        console.log(1)
      });
    },

    // Check for current logged in user or if there isnt one
    checkForUser() {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          this.isLoggedIn = true
          console.log('logged in user from previous page is', user)

          const name = user.email.split('@')[0]
          const firstLetter = name.charAt(0)
          const firstLetterCap = firstLetter.toUpperCase()
          const remainingLetters = name.slice(1)
          this.name = firstLetterCap + remainingLetters
        }
      })
    },

    // Pulls review data from firebase and auto populates review section specific to each uniInfo page
    async getReviewInfo() {
      const name = this.uniName
      const review = `${name} Reviews`
      console.log('uniname and its review collection is', name, review)

      let q = query(collectionGroup(fireStore, review))
      let getUniReviews = await getDocs(q)
      getUniReviews.forEach((doc) => {
        console.log(`${name} review info is`, doc.data())
        let review = {}
        review['email'] = doc.data().Email
        review['likes'] = doc.data().Likes
        review['info'] = doc.data().ReviewInfo
        review['uniName'] = doc.data().UniName
        review['userName'] = doc.data().UserName
        review['currentTime'] = doc.data().currentTime
        this.reviews.push(review)
        console.log(review, this.reviews)
      });
      // this.isReviewsLoaded = true
      // this.checkForReviews()
    },
    
    // Dynamically opens modal and calls upon modal component
    showModal() {
      console.log('modal opened from uniInfo')
      this.isModalOpen = true;
    },

    // Closes the modal when adding of review function has been completed
    closeModal() {
      console.log('modal closed from uniInfo')
      this.isModalOpen = false;
    }
  },
};
</script>
