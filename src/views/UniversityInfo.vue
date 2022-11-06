<template>
  <FavBtn :uniName="uniName"></FavBtn>
      <div class="container-fluid" style="max-width:fit-content;margin-left:8rem;margin-right:8rem;">
    <div class="row mb-3">
      <div class="col h2">{{ uniName }}</div>
    </div>
    <div class="row mb-3">
      <div class="col-4">
        <div class="d-inline me-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          4.64
        </div>
        <a href="#" class="text-dark mx-1">90 Reviews</a>
        <a href="#" class="text-dark mx-1">City∙Country</a>
      </div>
      <div class="col-4"></div>
      <div class="col-2 text-end">
        <span class="mx-1"
          ><i class="bi bi-upload m-1"></i
          ><a href="/" class="text-dark">Share</a></span
        >
        <span class="mx-1"
          ><i class="bi bi-download m-1"></i
          ><a href="/" class="text-dark"> Save</a></span
        >
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-6">
        <img
          src="../assets/440px-University_of_St._Gallen_EUR-HSG_Institute_Building.jpg"
          class="w-100"
          style=""
          alt="uni-display"
        />
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
        <img
          src="../assets/311ca332-dcb2-4b66-945c-ded8712a3543.webp"
          class="w-100 mb-2"
          alt=""
        />
        <img
          src="../assets/HSG-SQUARE-2000x1125.jpeg"
          class="w-100"
          style="width: 18rem"
          alt=""
        />
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
          <span><b>Min Gpa : </b>{{gpaReq}}</span>
          <b>10th/90th Percentile :
          <span class="badge text-bg-danger m-1">{{igpaTen}}</span>
           |
           <span class="badge text-bg-success m-1">{{igpaNinety}}</span>
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
          <p class="d-flex align-items-center gap-3">Semester 1: <b style="font-size:x-large">{{numSlots1}}</b></p>
          <p class="d-flex align-items-center gap-3">Semester 2: <b style="font-size:x-large">{{numSlots2}}</b></p>
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
            >Proximity: ~3500km
          </li>
          <!-- Language spoken -->
          <li class="my-4">
            <i style="font-size: 2rem" class="bi bi-translate me-4"></i
            >Language: English, Portugese, Spanish
          </li>
          <!-- Website Url -->
          <li class="my-4">
            <i style="font-size: 2rem; margin-right:18px ;" class="fa-solid fa-computer"></i>
            <span>University page : <a :href="uniUrl">{{uniUrl}}</a></span>
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
        <span>University page > module info : <a :href="uniCourseUrl" target="_blank">{{uniCourseUrl}}</a></span>
        <br>
        <!-- Module component -->
        <div class="container-fluid">
          <div class="row gap-3">
            <Module class='d-flex flex-wrap' v-for="(mod,index) in mods" :key="index"
                :year = "mod.year"
                :desc = "mod.desc"
                :difficulty = "mod.difficulty"
                :faculty = "mod.faculty"
                :url = "mod.url"
                :id = "mod.id"
                :name="mod.name"
                :popularity="mod.popularity"
                :sem = "mod.sem"
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
      </div>
    </div>
  </div>
</template>
<script>
import GoogleMap from "@/components/GoogleMap.vue";
import Module from "@/components/Module.vue"
// console.log(import.meta.env.VITE_GOOGLE_MAP_API_KEY);
import { fireStore } from "@/service/Firebase/firebaseInit"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import FavBtn from "@/components/FavBtn.vue";

export default {
  name: "UniPage",
  data() {
    return {
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

    }
  },
  components: {
    GoogleMap,
    Module,
    FavBtn,
  },
  computed: {
    gpaReq() {
      if (this.gpaReq == null){
        return 'NA'
      } return this.gpaReq
    }
  },
  mounted(){
    this.uniName = this.$route.params.name
    this.getUniInfo()
    this.getModuleInfo()
    console.log(this.uniName)
  },
  methods: {
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
    }
  }
};
</script>
