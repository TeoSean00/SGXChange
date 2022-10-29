<template>
  <router-link
    to="/"
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
  font-weight: bold;
}

.marquee-uni-image {
  position: absolute;
  border-radius: 25px;
  object-fit: cover;
}

.marquee-uni-name {
  position: relative;
  color: white;
  font-size: xx-large;
}

.unfade {
  filter: grayscale(0%);
}

.faded {
  filter: grayscale(80%);
}
</style>
