<template>
    <!-- Suggested Uni Section -->
<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-1"></div>
        <div class="col">
            <h2>Suggested universities</h2>
        </div>
        <div class="col-1"></div>
    </div>
    <!-- blank space -->
    <div class="row">
        <div class="col-1"></div>
            <UniCardSmall class="col unicard" v-for="i in 4" :key="i" />
        <div class="col-1"></div>
    <!-- some binding needed for unicard data, need to wait for backend -->
    </div>
</div>
  <!-- All Uni list section -->
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-1"></div>
        <div class="col"><h2>All universities</h2></div>
        <div class="col-1"></div>
    </div>
    <div class="row">
        <div class="col-1"></div>
        <!-- put variables as props -->
            <UniCardSmall class="col unicard" v-for="uni in items.slice(0,4)" :key="uni"
            :universityName="uni.name"
            :gpaReq="uni.gpaReq"
            />
        <div class="col-1"></div>
    </div>
    <div class="row">
        <div class="col-1"></div>
            <UniCardSmall class="col unicard" v-for="i in 4" :key="i" />
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

import {fireStore} from "../service/Firebase/firebaseInit"
import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(fireStore, "Universities"));


export default {
  name: "UniversityPage",
  data() {
    return {
        // items per page set to default
        perPage: 3,
        // this will be v-modelled to change according to what user clicks
        currentPage: 1,
        items: []
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
  mounted() {
    console.log('mounted2')
    querySnapshot.forEach((doc) => {
      let universityInfo = {}
      // put key-value pairs
      universityInfo['name'] = doc.data().UniversityName
      universityInfo['gpaReq'] = doc.data().GpaRequirement
      this.items.push(universityInfo)
  });
  }
};
</script>
