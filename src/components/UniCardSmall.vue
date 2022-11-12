<template>
  <!-- NEW STYLING OF UNI CARDS -->
  <div class="custom-card">
    <router-link :to="`/universityInfo/` + universityName">
      <div class="package-item " style="height: 100%">
        <img class="img-fluid card-img-top" :src="imgURL" alt="" />
        <div class="pt-2 px-2 pb-2">
          <a
            class="h5 text-decoration-none"
            style="
              color: #002766;
              display: flex;
              align-items: center;
              height: 5rem;
              font-weight: 600;
            "
            >{{ universityName }}</a
          >
          <div class="d-flex justify-content mb-2">
            <span class="mx-2" style="color: black"
              ><p class="fa fa-map-marker-alt mr-2" style="color: black"></p>
              {{ CountryId }}</span
            >
            <span class="mx-2" style="color: black"
              ><p
                class="fa-solid fa-earth-americas mr-2"
                style="color: black"
              ></p>
              {{ RegionId }}</span
            >
          </div>
          <div class="mb-2">
            <span class="mx-2" style="color: black"
              ><p class="fa fa-user mr-2" style="color: black"></p> Min GPA:
              {{ gpa }}</span
            >
          </div>
          <!-- <div class="d-flex justify-content-between mb-3">
              <small class="m-0"
                ><i class="fa fa-map-marker-alt text-primary mr-2"></i>
                {{ CountryId }}</small
              >
              <small class="m-0"
                ><i class="fa-solid fa-earth-americas text-primary  mr-2"></i
                >{{ RegionId }}</small
              >
              <small class="m-0"
                ><i class="fa fa-user text-primary mr-2"></i>Min GPA:
                {{ gpa }}</small
              >
            </div> -->
          <!-- <div class="border-top mt-4 pt-4">
              <div class="d-flex justify-content-between">
                <span class="m-0">
                  <i class="fa-solid fa-graduation-cap text-secondary mr-2"></i
                  >Min GPA: {{ gpa }}
                </span>
              </div>
            </div> -->
        </div>
      </div>
    </router-link>
  </div>

  <!-- <div class="card">
      <router-link :to="`/universityInfo/` + universityName">
        <img class="card-img-top" :src="imgURL" alt="" />
        <div class="card-body">
          <h6
            style="
              height: 2.5rem;
              color: black;
              display: flex;
              align-items: center;
            "
          >
            {{ universityName }}
          </h6> -->
  <!-- <span v-if="universityName.length<30">Filler</span> -->
  <!-- <ul class="list-group list-group-flush">
            <li class="list-group-item uniitem">Country: {{ CountryId }}</li>
            <li class="list-group-item uniitem">Region: {{ RegionId }}</li>
            <li class="list-group-item uniitem">Minimum GPA: {{ gpa }}</li> -->
  <!-- <span class="badge text-bg-dark m-1">10th Perc : {{IgpaTenPercentile}}</span>
                    <span class="badge text-bg-dark m-1">90th Perc : {{IgpaNinetyPercentile}}</span> -->
  <!-- </ul> -->
  <!-- <router-link class="btn btn-dark float-right" to="UniversityPage">View</router-link> -->
  <!-- pass props here -->
  <!-- </div> -->
  <!-- </router-link> -->
  <!-- </div> -->
</template>
<!-- define props, data etc here -->

<script>
import Tilt from "@/components/Tilt.vue";

export default {
  data() {
    return {};
  },
  props: [
    "universityName",
    "gpaReq",
    "IgpaNinetyPercentile",
    "IgpaTenPercentile",
    "CountryId",
    "RegionId",
    "imgURL",
  ],
  components: {
    Tilt,
  },
  computed: {
    gpa() {
      if (this.gpaReq != null) {
        return this.gpaReq;
      }
      return "NA";
    },
    // IgpaNinetyPercentile(){
    //     if(this.IgpaNinetyPercentile == null){
    //         return "NA"
    //     } return this.IgpaNinetyPercentile
    // },
    // IgpaTenPercentile(){
    //     if(this.IgpaTenPercentile == null){
    //         return "NA"
    //     } return this.IgpaTenPercentile
    // },
  },
  mounted() {},
};
</script>
<style scoped>
.custom-card {
}

.card-img-top {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.package-item {
    border: 1px solid #e6f7ff;
    /* border-color: #e6f7ff; */
  transition: 0.5s;
}

.package-item:hover {
  box-shadow: 0 0 30px #e6f7ff;
}
</style>
