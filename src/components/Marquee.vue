<!-- Pull the images from firestore and the name of the place -->
<template>
  <div class="marquee">
    <h5 class="marquee-header text-center mt-3">Where do you want to go?</h5>
    <Vue3Marquee :pauseOnHover="true" :duration="60">
      <div class="marquee-card" v-for="avatar in avatarArray" :key="avatar">
        <router-link to="/">
          <img
            class="marquee-uni-image"
            src="../assets/school.jpg"
            width="235"
            height="350"
          />
          <h2 class="marquee-uni-name display-5 text-center">
            University Name
          </h2>
          <!-- <button class="btn">University Name</button> -->
        </router-link>
      </div>
    </Vue3Marquee>
    <div class="text-center marquee-anywhere">
      <router-link to="/UniversityPage" id="seeUni">
        <button class="marquee-btn">Take me anywhere</button>
      </router-link>
    </div>

    <div class="text-center marquee-footer">
      <router-link to="/UniversityPage" id="seeUni">
        See All Universities
        <a-space><arrow-right-outlined /></a-space>
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive, defineComponent } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import { ArrowRightOutlined } from "@ant-design/icons-vue";

export default {
  name: "CardsPauseOnHover",
  components: {
    Vue3Marquee,
    ArrowRightOutlined,
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
};
</script>