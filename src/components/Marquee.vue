<!-- Pull the images from firestore and the name of the place -->
<template>
  <div class="marquee">
    <h5 class="marquee-header text-center mt-3">Where do you want to go?</h5>
    <Vue3Marquee :pauseOnHover="true" :duration="60">
      <div class="card" v-for="avatar in avatarArray" :key="avatar">
        <MarqueeCard
          v-on:switch="hideBtn"
          v-on:switchOn="showBtn"
        ></MarqueeCard>
      </div>
    </Vue3Marquee>
    <div class="marquee-footer" :class="{ invisible: hover, visible: !hover }">
      <div class="text-center marquee-anywhere">
        <router-link to="/UniversityPage" id="seeUni">
          <button class="marquee-btn marquee-btn-hide">Take me anywhere</button>
        </router-link>
      </div>

      <div class="text-center marquee-seeAllUni marquee-btn-hide">
        <router-link to="/UniversityPage" id="seeUni">
          See All Universities
          <a-space><arrow-right-outlined /></a-space>
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
    };
  },
  setup() {
    const avatarArray = reactive([]);

    for (let i = 0; i < 10; i++) {
      avatarArray.push(
        `https://avatars.dicebear.com/api/avataaars/${Math.random()
          .toString(36)
          .substr(2, 6)}.svg`
      );
    }

    return {
      avatarArray,
    };
  },
  methods: {
    hideBtn() {
      // console.log("hello");
      this.hover = true;
      // console.log(this.hover);
    },
    showBtn() {
      this.hover = false;
      // console.log(this.hover);
    },
  },
};
</script>

<style scoped>
.marquee {
  background-color: black;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.marquee-header {
  padding-top: 20px;
  padding-bottom: 0px;
  font-size: 16px;
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
  font-size: 16px;
}

.marquee-footer {
  margin-top: 20px;
  padding-top: 0px;
  padding-bottom: 30px;
}

#seeUni {
  color: white;
}

#seeUni:hover {
  text-decoration: none;
}

.marquee-btn {
  transition: all 0.2s;
  background-color: black;
  border-radius: 2px;
  border-color: white;
  font-size: 23px;
  border-radius: 25px;
  padding-left: 80px;
  padding-right: 80px;
}

.marquee-btn:hover {
  background: rgb(255, 255, 255);
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
