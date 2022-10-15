<!-- <template> -->

<!-- <div class="marquee-wrapper">
    <div class="marquee">
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
      <img
        class="marquee-img rounded-3"
        src="https://placeimg.com/235/350/any"
      />
    </div>
  </div> -->
<!-- </template> -->

<!-- Pull the images from firestore and the name of the place -->
<template>
  <Vue3Marquee :pauseOnHover="true">
    <div class="card" v-for="avatar in avatarArray" :key="avatar">
      <router-link to="/">
        <img src="../assets/school.jpg" width="235" height="350" />
        <!-- <button style="border: 0px margin-top: 20px; margin-bottom: 0px">
        New York
      </button> -->
        <button class="btn">University Name</button>
      </router-link>
    </div>
  </Vue3Marquee>
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

.btn {
  background-color: white;
  padding: 5px;
  margin: 10px 0;
  transition: all 0.2s;
  font-size: 30px;
}

.btn:hover {
  background: rgb(226, 226, 226);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
