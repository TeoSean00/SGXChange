<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <h2>Searched for: {{ searchKey }}</h2>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <!-- put variables as props -->
      <div class="row row-cols-4 d-flex flex-wrap justify-content-center">
        <UniCardSmall
          class="unicard"
          v-for="(uni, index) in outputUni.slice(row1start, row1end)"
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
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <!-- PAGINATION -->
  <div class="row">
    <div class="col">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" @click="togglePage">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link active" @click="togglePage">1</a>
          </li>
          <template v-if="lastPage > 1">
            <li class="page-item" v-for="num in lastPage - 1" :key="num">
              <a class="page-link" @click="togglePage">{{ num + 1 }}</a>
            </li>
          </template>
          <li class="page-item">
            <a class="page-link" @click="togglePage">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <!-- PAGINATION END -->
  <br />
  <br />
  <br />
</template>

<script>
import UniCardSmall from "@/components/UniCardSmall.vue";

import { fireStore } from "@/service/Firebase/firebaseInit";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

export default {
  name: "UniversityPage",
  data() {
    return {
      // items per page set to default
      perPage: 3,
      // this will be v-modelled to change according to what user clicks
      currentPage: 1,
      items: [],
      outputUni: [],
      searchKey: "",
      // items per page set to default
      perPage: 8,
      // this will be v-modelled to change according to what user clicks
      currentPage: 1,
      firstPage: 1,
      lastPage: 0,
    };
  },

  computed: {
    rows() {
      return this.outputUni.length;
    },
    row1start() {
      return (this.currentPage - 1) * this.perPage;
    },
    row1end() {
      return this.row1start + this.perPage;
    },
  },
  components: {
    UniCardSmall,
  },
  methods: {
    pagination() {
      const pagelinks = document.getElementsByClassName("page-link");

      this.lastPage = Math.ceil(this.outputUni.length / this.perPage);
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
      for (const li of pagelinks) {
        li.classList.remove("active");
        li.classList.remove("disabled");

        if (parseInt(li.text) === this.currentPage) {
          // console.log(li.text);
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
    async searchFunc(searchItem) {
      this.outputUni = [];
      this.searchKey = searchItem;
      const getUni = await getDocs(collection(fireStore, "Universities2"));
      getUni.forEach((doc) => {
        let universityInfo = {};
        // put key-value pairs
        // console.log(doc.data().HostUniversity);
        if (
          doc
            .data()
            .HostUniversity.toLowerCase()
            .includes(this.searchKey.toLowerCase())
        ) {
          // console.log(doc.data().HostUniversity);
          universityInfo["name"] = doc.data().HostUniversity;
          universityInfo["gpaReq"] = doc.data().gpaReq;
          universityInfo["NoOfPlacesSem1"] = doc.data().NoOfPlacesSem1;
          universityInfo["NoOfPlacesSem2"] = doc.data().NoOfPlacesSem2;
          universityInfo["CountryId"] = doc.data().Country;
          universityInfo["RegionId"] = doc.data().Region;
          universityInfo["imgURL"] = doc.data().UniImageLink1;
          this.outputUni.push(universityInfo);
        }
      });
      this.pagination();
    },
  },
  async mounted() {
    this.searchFunc(this.$route.query.search);
  },
  async beforeRouteUpdate(to, from, next) {
    this.searchFunc(to.query.search);
  },
};
</script>
