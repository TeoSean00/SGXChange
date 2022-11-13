<template>
  <tilt>
    <div class="card">
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
          </h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item uniitem">Country: {{ CountryId }}</li>
            <li class="list-group-item uniitem">Region: {{ RegionId }}</li>
            <li class="list-group-item uniitem">Minimum gpa: {{ gpa }}</li>
          </ul>
        </div>
      </router-link>
    </div>
  </tilt>
</template>
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
</style>
