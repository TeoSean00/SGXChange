<template>
  <!-- NEW STYLING OF UNI CARDS -->
  <div class="custom-card">
    <router-link :to="`/universityInfo/` + universityName">
      <div class="package-item" style="height: 100%">
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
              ><p class="fa fa-map-marker-alt me-1" style="color: black"></p>
              {{ CountryId }}</span
            >
            <span class="mx-2" style="color: black"
              ><p
                class="fa-solid fa-earth-americas me-1"
                style="color: black"
              ></p>
              {{ RegionId }}</span
            >
          </div>
          <div class="mb-2">
            <span class="mx-2" style="color: black"
              ><p class="fa fa-user me-1" style="color: black"></p>
              Min GPA: {{ gpa }}</span
            >
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>


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

  computed: {
    gpa() {
      if (this.gpaReq != null) {
        return this.gpaReq;
      }
      return "NA";
    },
  },
  mounted() {},
};
</script>
<style scoped>
.card-img-top {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.package-item {
  border: 1px solid #e6f7ff;
  transition: 0.5s;
}

.package-item:hover {
  box-shadow: 0 0 30px #e6f7ff;
}
</style>
