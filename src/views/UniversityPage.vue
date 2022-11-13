<template>
  <!-- All Uni list section -->
  <div class="container-fluid mt-4 mx-2 d-flex flex-column" style="">
    <div class="row mx-5">
      <div class="col"><h2>Universities</h2></div>
    </div>
    <div class="row mx-4">
      <div class="col">
        <a-menu
          class="uni-filter-bar"
          v-model:selectedKeys="current"
          mode="horizontal"
        >
          <a-menu-item key="0"> All </a-menu-item>
          <a-menu-item key="1"> Africa </a-menu-item>
          <a-menu-item key="2"> Asia </a-menu-item>
          <!-- <a-menu-item key="4"> Central America </a-menu-item> -->
          <a-menu-item key="3"> Europe </a-menu-item>
          <a-menu-item key="4"> North America </a-menu-item>
          <a-menu-item key="6"> South America </a-menu-item>
          <!-- <a-menu-item key="3"> The Caribbean </a-menu-item> -->
          <a-menu-item key="5"> Oceania </a-menu-item>
        </a-menu>
      </div>
    </div>
    <br />

    <!-- UniFilterBar -->

    <div class="row row-cols-4 d-flex flex-wrap justify-content-center">
      <!-- put variables as props -->
      <UniCardSmall
        class="unicard col"
        v-for="(uni, index) in items.slice(row1start, row1end)"
        :key="index"
        :universityName="uni.name"
        :gpaReq="uni.gpaReq"
        :IgpaNinetyPercentile="uni.IgpaNinetyPercentile"
        :IgpaTenPercentile="uni.IgpaTenPercentile"
        :NoOfPlacesSem1="uni.NoOfPlacesSem1"
        :NoOfPlacesSem2="uni.NoOfPlacesSem2"
        :CountryId="uni.CountryId"
        :RegionId="uni.RegionId"
        :imgURL="uni.imgURL"
      />

      <!-- <div class="w-100"></div> -->
      <!-- <UniCardSmall class="col unicard" v-for="uni in items.slice(row2start,row2end)" :key="uni"
            :universityName="uni.name"
            :gpaReq="uni.gpaReq"
            :IgpaNinetyPercentile = "uni.IgpaNinetyPercentile"
            :IgpaTenPercentile = "uni.IgpaTenPercentile"
            :NoOfPlacesSem1 = "uni.NoOfPlacesSem1"
            :NoOfPlacesSem2 = "uni.NoOfPlacesSem2"
            :CountryId = "uni.CountryId"
            :RegionId = "uni.RegionId"
            :imgURL = "uni.imgURL"
            /> -->
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <!-- pagination -->
  <div class="row">
    <div class="col">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" @click="togglePage">Previous</a>
          </li>
          <!-- this part should be v-for based on no. of items in data -->
          <!-- they should be buttons that bind to v-model currentPage-->
          <!-- paginated items should change as well , use array.slice(start,end)-->
          <!-- create a new component for paginated items  -->
          <li class="page-item">
            <a class="page-link active" @click="togglePage">1</a>
          </li>
          <template v-if="lastPage > 1">
            <li class="page-item" v-for="num in lastPage - 1" :key="num">
              <a class="page-link"  @click="togglePage">{{ num + 1 }}</a>
            </li>
          </template>
          <li class="page-item">
            <a class="page-link" @click="togglePage">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <br />
  <br />
  <br />
</template>

<script>
import UniCardSmall from "@/components/UniCardSmall.vue";
import { fireStore } from "@/service/Firebase/firebaseInit";
import { collection, getDocs } from "firebase/firestore";
import UniFilterBar from "../components/UniFilterBar.vue";
import { defineComponent, ref } from "vue";

export default {
  name: "UniversityPage",
  data() {
    return {
      // items per page set to default
      perPage: 8,
      // this will be v-modelled to change according to what user clicks
      currentPage: 1,
      firstPage: 1,
      lastPage: 0,
      items: [],
      value: "0",
      regionId: {
        0: "All",
        1: "Africa",
        2: "Asia",
        // 3: "The Caribbean",
        // 4: "Central America",
        3: "Europe",
        4: "North America",
        5: "Oceania",
        6: "South America",
      },
      getAllUni: [],
      // key will be uni full name, val will be baskets it can map to
      uniToBaskets: {},
      // key will be baskets, val will be specific modules in that basket mappable
      basketToModules: {},
    };
  },
  setup() {
    const current = ref(["0"]);
    return {
      current,
    };
  },

  methods: {
    pagination() {
      const pagelinks = document.getElementsByClassName("page-link");

      this.lastPage = Math.ceil(this.items.length / this.perPage);
      this.currentPage = 1;
      // if filtering reduces the pages to 1, disable previous and next
      if (this.lastPage == 1) {
        for (const li of pagelinks) {
          if (li.text == "Previous") {
            li.classList.add("disabled");
          } else if (li.text == "Next") {
            li.classList.add("disabled");
          } else if (parseInt(li.text) == this.currentPage) {
            li.classList.add("active");
          }
        }
      }
      // if filtering does not reduce the page to 1, disable previous only
      else {
        for (const li of pagelinks) {
          if (li.text == "Previous") {
            li.classList.add("disabled");
          } else if (li.text == "Next") {
            li.classList.remove("disabled");
          } else if (parseInt(li.text) == this.currentPage) {
            li.classList.add("active");
          }
        }
      }
    },
    togglePage: function () {
      // moves to next pg or previous pg based on button clicked
      if (event.target.text == "Previous") {
        if (this.currentPage != 1) {
          this.currentPage -= 1;
        }
      } else if (event.target.text == "Next") {
        if (this.currentPage != this.lastPage + 1) {
          this.currentPage += 1;
        }
      } else {
        this.currentPage = parseInt(event.target.text);
      }
      const pagelinks = document.getElementsByClassName("page-link");

      // toggles active and disabled buttons

      // goes through the pagination buttons and removes all active classes
      // also checks if currentPage == 1, then add disbaled class to previous btn
      // also if currentPage == last, then add disabled class to next btn

      for (const li of pagelinks) {
        li.classList.remove("active");
        li.classList.remove("disabled");

        if (parseInt(li.text) === this.currentPage) {
          console.log(li.text);
          li.classList.add("active");
        }
        if (li.text == "Previous" && this.currentPage == this.firstPage) {
          li.classList.add("disabled");
        } else if (li.text == "Next" && this.currentPage == this.lastPage) {
          li.classList.add("disabled");
        } else if (parseInt(li.text) == this.currentPage) {
          event.target.classList.add("active");
        }
      }
    },
    async getAllUniversities() {
      this.getAllUni = await getDocs(collection(fireStore, "Universities2"));
    },

    async getFilteredUniversities() {
      this.items = [];
      let region = this.regionId[this.current[0]];
      console.log(region);
      if (region == "All") {
        this.getAllUni.forEach((doc) => {
          // put key-value pairs
          let universityInfo = {};
          universityInfo["name"] = doc.data().HostUniversity;
          universityInfo["gpaReq"] = doc.data().gpaReq;
          // universityInfo["IgpaNinetyPercentile"] =
          //   doc.data().IgpaNinetyPercentile;
          // universityInfo["IgpaTenPercentile"] = doc.data().IgpaTenPercentile;
          universityInfo["NoOfPlacesSem1"] = doc.data().NoOfPlacesSem1;
          universityInfo["NoOfPlacesSem2"] = doc.data().NoOfPlacesSem2;
          universityInfo["CountryId"] = doc.data().Country;
          universityInfo["RegionId"] = doc.data().Region;
          universityInfo["imgURL"] = doc.data().UniImageLink1;
          this.items.push(universityInfo);
        });
        this.pagination();
      } else {
        this.getAllUni.forEach((doc) => {
          let universityInfo = {};
          if (doc.data().Region == region) {
            // put key-value pairs
            universityInfo["name"] = doc.data().HostUniversity;
            universityInfo["gpaReq"] = doc.data().GPA;
            universityInfo["NoOfPlacesSem1"] = doc.data().NoOfPlacesSem1;
            universityInfo["NoOfPlacesSem2"] = doc.data().NoOfPlacesSem2;
            universityInfo["CountryId"] = doc.data().Country;
            universityInfo["RegionId"] = doc.data().Region;
            universityInfo["imgURL"] = doc.data().UniImageLink1;
            this.items.push(universityInfo);
          }
        });
        this.pagination();
      }
    },
    async getUniToBaskets() {
      // loop through the BasketToUni collection, for each basket, if the uni value not in UniToBasket obj, create new key. Else push to UniToBasket[uni] which will be an array of baskets
      var basketToUniversities = await getDocs(
        collection(fireStore, "BasketToUniversities")
      );
      basketToUniversities.forEach((doc) => {
        let basketInfo = {};
        // console.log(doc.data()['Universities'])
        // console.log(doc.id)
        let universities = doc.data()["Universities"];
        let basket = doc.id;
        for (let uni of universities) {
          if (uni in this.uniToBaskets) {
            this.uniToBaskets[uni].push(basket);
          } else {
            this.uniToBaskets[uni] = [basket];
          }
        }
      });
      // console.log(this.uniToBaskets)
    },
    async getBasketToModules() {
      // loop through the BasketToUni collection, for each basket, if the uni value not in UniToBasket obj, create new key. Else push to UniToBasket[uni] which will be an array of baskets
      var basketToModules = await getDocs(
        collection(fireStore, "BasketToModules")
      );
      basketToModules.forEach((doc) => {
        let basketInfo = {};
        // console.log(doc.data()['Universities'])
        // console.log(doc.id)
        let basket = doc.data()["Baskets"];
        let Modules = doc.data()["Modules"];

        if (basket in this.basketToModules) {
          this.basketToModules[basket].push(Modules);
        } else {
          this.basketToModules[basket] = [Modules];
        }
      });
      console.log(this.basketToModules);
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
    row1start() {
      return (this.currentPage - 1) * this.perPage;
    },
    row1end() {
      return this.row1start + this.perPage;
    },
    // row2start(){
    //   return this.row1end
    // },
    // row2end() {
    //   return this.row2start+ this.perPage/2
    // },
  },

  watch: {
    current() {
      this.getFilteredUniversities();
    },
  },

  components: {
    UniCardSmall,
    UniFilterBar,
  },
  async mounted() {
    await this.getUniToBaskets();
    await this.getBasketToModules();
    await this.getAllUniversities();
    await this.getFilteredUniversities();
  },
};
</script>
