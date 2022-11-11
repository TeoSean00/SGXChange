<!-- Pull the images from firestore and the name of the place -->
<template>
  <div class="marquee pt-4">
    <!-- <h5 class="marquee-header text-center mt-3 pt-4">
      Where do you want to go?
    </h5> -->
    <Vue3Marquee :pauseOnHover="true" :duration="110">
      <div class="" v-for="uni in universities" :key="uni">
        <MarqueeCard
          class="card"
          v-on:switch="hideBtn"
          v-on:switchOn="showBtn"
          :universityName="uni.name"
          :universityImg="uni.imgUrl"
        ></MarqueeCard>
      </div>
    </Vue3Marquee>
    <div class="marquee-footer">
      <div class="text-center marquee-anywhere mt-5">
        <router-link
          :to="
            `/universityInfo/` +
            universityNames[getRandomInt(universityNames.length)]
          "
        >
          <button class="marquee-btn marquee-btn-hide">Take me anywhere</button>
        </router-link>
      </div>

      <div class="text-center marquee-seeAllUni marquee-btn-hide">
        <router-link to="/UniversityPage" id="seeUni">
          See All Universities
          <!-- <a-space><arrow-right-outlined /></a-space> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, defineComponent } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import MarqueeCard from "./MarqueeCard.vue";
import { fireStore } from "@/service/Firebase/firebaseInit";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

export default {
  name: "CardsPauseOnHover",
  components: {
    Vue3Marquee,
    ArrowRightOutlined,
    MarqueeCard,
  },
  data() {
    return {
      hover: false,
      universities: [],
      universityNames: [],
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },

    hideBtn() {
      // console.log("hello");
      this.hover = true;
      // console.log(this.hover);
    },
    showBtn() {
      this.hover = false;
      // console.log(this.hover);
    },
    async getInfo() {
      const getUniversities = await getDocs(
        collection(fireStore, "Universities2")
      );
      getUniversities.forEach((doc) => {
        let universityInfo = {};
        // put key-value pairs
        universityInfo["name"] = doc.data().HostUniversity;
        // universityInfo['gpaReq'] = doc.data().GpaRequirement
        // universityInfo['IgpaNinetyPercentile'] = doc.data().IgpaNinetyPercentile
        // universityInfo['IgpaTenPercentile'] = doc.data().IgpaTenPercentile
        // universityInfo['NoOfPlacesSem1'] = doc.data().NoOfPlacesSem1
        // universityInfo['NoOfPlacesSem2'] = doc.data().NoOfPlacesSem2
        // universityInfo['CountryId'] = doc.data().CountryId
        // universityInfo['RegionId'] = doc.data().RegionId
        universityInfo["imgUrl"] = doc.data().UniImageLink1;
        // console.log(universityInfo.imgURL);
        this.universities.push(universityInfo);
        this.universityNames.push(doc.data().HostUniversity);
      });
    },
  },
};
</script>

<style scoped>
.marquee {
  background-color: black;
  /* border-radius: 1rem; */
  border-color: black;
}

.marquee-header {
  padding-top: 20px;
  padding-bottom: 0px;
  font-size: 1rem;
  color: white;
}
.card {
  width: 235px;
  height: 350px;
  border: 0px;
  margin: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  position: relative;
}

.marquee-seeAllUni {
  margin-top: 15px;
  font-size: 1rem;
}

.marquee-footer {
  margin-top: 20px;
  padding-top: 0px;
  padding-bottom: 30px;
}

#seeUni {
  color: white;
  text-decoration: none;
}

#seeUni:hover {
  text-decoration: none;
  color: #40a9ff;
}

.marquee-btn {
  transition: all 0.2s;
  background-color: black;
  border-radius: 2px;
  border-color: white;
  font-size: 23px;
  border-radius: 5px;
  padding-left: 80px;
  padding-right: 80px;
  color: white;
  font-weight: 500;
}

.marquee-btn:hover {
  background-color: #40a9ff;
  border-color: #40a9ff;
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
