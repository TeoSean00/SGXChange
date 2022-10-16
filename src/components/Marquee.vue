<!-- Pull the images from firestore and the name of the place -->
<template>
  <div>
    <h2 class="text-center mt-3">Where do you want to go?</h2>
    <Vue3Marquee :pauseOnHover="true">
      <div class="card" v-for="avatar in avatarArray" :key="avatar">
        <router-link to="/">
          <img
            class="uni-img"
            src="../assets/school.jpg"
            width="235"
            height="350"
          />
          <!-- <button style="border: 0px margin-top: 20px; margin-bottom: 0px">
        New York
      </button> -->
          <h2 class="uni-header display-5 text-center">University Name</h2>
          <!-- <button class="btn">University Name</button> -->
        </router-link>
      </div>
    </Vue3Marquee>
    <div class="text-center">
      <router-link to="/UniversityPage" id="seeUni">
        See All Universities
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";

export default {
  name: "CardsPauseOnHover",
  components: {
    Vue3Marquee,
  },
  setup() {
    const avatarArray = reactive([]);

    for (let i = 0; i < 5; i++) {
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
.card {
  width: 235px;
  height: 350px;
  border: 0px;
  /* border-radius: 3%; */
  /* background-color: rgb(241, 241, 241); */
  margin: 20px 40px;
  /* padding: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
}

.uni-img {
  position: relative;
}

.uni-header {
  position: absolute;
  top: 175px;
  color: black;
}

#seeUni {
  color: black;
}

#seeUni:hover {
  text-decoration: none;
}
</style>
