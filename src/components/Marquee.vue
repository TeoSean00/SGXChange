<!-- Pull the images from firestore and the name of the place -->
<template>
  <div class="marquee">
    <h5 class="marquee-header text-center mt-3">Where do you want to go?</h5>
    <Vue3Marquee :pauseOnHover="true" :duration="60">
      <div class="card" v-for="avatar in avatarArray" :key="avatar">
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

<style scoped>
.marquee {
  background-color: black;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.marquee-header {
  padding-top: 40px;
  padding-bottom: 30px;
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
  background-color: black;
}

.marquee-uni-image {
  position: relative;
  border-radius: 25px;
  opacity: 0;
}

.marquee-uni-image:hover {
  opacity: 1;
}

.marquee-uni-name {
  position: absolute;
  top: 150px;
  color: white;
}

.marquee-footer {
  font-size: 16px;
  padding-bottom: 30px;
  padding-top: 20px;
}

#seeUni {
  color: white;
}

#seeUni:hover {
  text-decoration: none;
}

.marquee-btn {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 10px 0;
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
