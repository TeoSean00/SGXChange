<template>
<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-1"></div>
        <div class="col"><h2>Searched for: {{ searchKey }}</h2></div>
        <div class="col-1"></div>
    </div>
    <div class="row">
        <div class="col-1"></div>
        <!-- put variables as props -->
            <UniCardSmall class="col unicard" v-for="uni in outputUni" :key="uni"
            :universityName="uni.name"
            :gpaReq="uni.gpaReq"
            />
        <div class="col-1"></div>
    </div>
</div>
<br>
<br>
<br>
<br>
<!-- pagination -->
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <!-- this part should be v-for based on no. of items in data -->
    <!-- they should be buttons that bind to v-model currentPage-->
    <!-- paginated items should change as well , use array.slice(start,end)-->
    <!-- create a new component for paginated items  -->
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
<br>
<br>
<br>

</template>

<script>
import UniCardSmall from "@/components/UniCardSmall.vue";

import {fireStore} from "@/service/Firebase/firebaseInit"
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
        searchKey: ""
    };
  },
  computed: {
      rows() {
        return this.items.length
      }
  },
  components: {
    UniCardSmall
  },
  async mounted() {
    console.log(this.$route.params.uni)
    this.searchKey = this.$route.params.uni
    const getUni = await getDocs(collection(fireStore, "Universities"));
    getUni.forEach((doc) => {
      let universityInfo = {}
      // put key-value pairs
      if( doc.data().UniversityName.includes(this.searchKey)){
        universityInfo['name'] = doc.data().UniversityName
        universityInfo['gpaReq'] = doc.data().GpaRequirement
        this.outputUni.push(universityInfo)
      }
    })
    console.log(this.outputUni)
  },
  async beforeRouteUpdate(to, from, next){

    // HEAP CODE for reference
    // axios
    //   .get(
    //     "http://caifan.ap-southeast-1.elasticbeanstalk.com/api/university/" +
    //       to.params.name
    //   )
    //   .then((response) => {
    //     console.log(response.data)
    //     this.university = response.data;
    //     this.getCountry();
    //     this.getRegion();
    //   })
    //   .catch((error) => console.log(error.response));;
  },
};
</script>
