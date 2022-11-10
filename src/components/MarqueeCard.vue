<template>
  <router-link
    :to="`/universityInfo/` + universityName"
    @mouseover="(hover = true), $emit('switch')"
    @mouseout="(hover = false), $emit('switchOn')"
  >
    <img
      :class="{ unfade: hover, faded: !hover }"
      class="marquee-uni-image"
      :src="universityImg"
      width="235"
      height="350"
    />
    <h6 class="marquee-uni-name display-5 text-center">{{ universityName }}</h6>
  </router-link>
</template>

<script>
export default {
  name: "MarqueeCard",
  emits: ["switch", "switchOn"],
  props: ["universityName", "universityImg"],
  data() {
    return {
      hover: false,
    };
  },
  mounted() {
    console.log(this.universityImg);
  },
};
</script>

<style scoped>
h6 {
  font-weight:400;
}

.marquee-uni-image {
  transition: all 0.4s;
  position: absolute;
  /* border-radius: 25px; */
  object-fit: cover;
}

.marquee-uni-name {
  position: relative;
  color: white;
  font-size: x-large;
}

.unfade {
  filter: grayscale(0%);
}

.faded {
  filter: grayscale(80%);
}
</style>
