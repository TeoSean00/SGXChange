<template>
    <!-- Suggested Uni Section -->
<!-- <div class="container-fluid mt-5">
    <div class="row">
        <div class="col-1"></div>
        <div class="col">
            <h2>Suggested universities</h2>
        </div>
        <div class="col-1"></div>
    </div>
    <div class="row">
        <div class="col-1"></div>
            <UniCardSmall class="col unicard" v-for="i in 4" :key="i" />
        <div class="col-1"></div>
    </div>
</div> -->
  <!-- All Uni list section -->
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<div class="container-fluid mt-5" style="max-width:fit-content;margin-left:8rem;margin-right:8rem;">
    <div class="row">
        <div class="col"><h2>All universities</h2></div>
    </div>
    <div class="row">
        <!-- put variables as props -->
            <UniCardSmall class="col unicard" v-for="(uni,index) in items.slice(row1start,row1end)" :key="index"
            :universityName="uni.name"
            :gpaReq="uni.gpaReq"
            :IgpaNinetyPercentile = "uni.IgpaNinetyPercentile"
            :IgpaTenPercentile = "uni.IgpaTenPercentile"
            :NoOfPlacesSem1 = "uni.NoOfPlacesSem1"
            :NoOfPlacesSem2 = "uni.NoOfPlacesSem2"
            :CountryId = "uni.CountryId"
            :RegionId = "uni.RegionId"
            :imgURL = "uni.imgURL"
                />
        <div class="w-100"></div>
            <UniCardSmall class="col unicard" v-for="uni in items.slice(row2start,row2end)" :key="uni" 
            :universityName="uni.name" 
            :gpaReq="uni.gpaReq"
            :IgpaNinetyPercentile = "uni.IgpaNinetyPercentile"
            :IgpaTenPercentile = "uni.IgpaTenPercentile"
            :NoOfPlacesSem1 = "uni.NoOfPlacesSem1"
            :NoOfPlacesSem2 = "uni.NoOfPlacesSem2"
            :CountryId = "uni.CountryId"
            :RegionId = "uni.RegionId"
            :imgURL = "uni.imgURL"
            />
    </div>
</div>
<br>
<br>
<br>
<br>
<!-- pagination -->
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" @click="togglePage">Previous</a>
    </li>
    <!-- this part should be v-for based on no. of items in data -->
    <!-- they should be buttons that bind to v-model currentPage-->
    <!-- paginated items should change as well , use array.slice(start,end)-->
    <!-- create a new component for paginated items  -->
    <li class="page-item"><a class="page-link active" @click="togglePage">1</a></li>
    <li class="page-item"><a class="page-link" @click="togglePage">2</a></li>
    <li class="page-item"><a class="page-link" @click="togglePage">3</a></li>
    <li class="page-item"><a class="page-link" @click="togglePage">4</a></li>
    <li class="page-item">
      <a class="page-link" @click="togglePage">Next</a>
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
import { collection, getDocs } from "firebase/firestore";




export default {
  name: "UniversityPage",
  data() {
    return {
        // items per page set to default
        perPage: 8,
        // this will be v-modelled to change according to what user clicks
        currentPage: 1,
        firstPage: 1,
        lastPage: 4,
        items: [],

    };
  },methods:{
    togglePage: function(){
        if (event.target.text=='Previous'){
            this.currentPage-=1
        }
        else if (event.target.text=='Next'){
            this.currentPage+=1
            console.log(this.currentPage)
        } else {
            this.currentPage = parseInt(event.target.text)
        }
        
        const pagelinks = document.getElementsByClassName('page-link')
        // goes through the pagination buttons and removes all active classes
        // also checks if currentPage == 1, then add disbaled class to previous btn
        // also if currentPage == last, then add disabled class to next btn
        for (const li of pagelinks){
            console.log(li)
            li.classList.remove('active')
            li.classList.remove('disabled')
            if (li.text == 'Previous' && this.currentPage==this.firstPage){
                li.classList.add('disabled')
            } else if (li.text == 'Next' && this.currentPage==this.lastPage){
                li.classList.add('disabled')
            } else if (parseInt(li.text) == this.currentPage){
                event.target.classList.add('active')
            }
            
        }
    }
  },
  computed: {
      rows() {
        return this.items.length
      },
      row1start(){
        return ((this.currentPage-1)*this.perPage)
      },
      row1end() {
        return this.row1start+ (this.perPage/2)
      },
      row2start(){
        return this.row1end 
      },
      row2end() {
        return this.row2start+ this.perPage/2
      },

  },
  components: {
    UniCardSmall
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(fireStore, "Universities"));
    querySnapshot.forEach((doc) => {
      let universityInfo = {}
      // put key-value pairs
      universityInfo['name'] = doc.data().UniversityName
      universityInfo['gpaReq'] = doc.data().GpaRequirement
      universityInfo['IgpaNinetyPercentile'] = doc.data().IgpaNinetyPercentile
      universityInfo['IgpaTenPercentile'] = doc.data().IgpaTenPercentile
      universityInfo['NoOfPlacesSem1'] = doc.data().NoOfPlacesSem1
      universityInfo['NoOfPlacesSem2'] = doc.data().NoOfPlacesSem2
      universityInfo['CountryId'] = doc.data().CountryId
      universityInfo['RegionId'] = doc.data().RegionId
      universityInfo['imgURL'] = doc.data().img1
      this.items.push(universityInfo)
      console.log(1)
  });
  }
};
</script>
