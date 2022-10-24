<template>
  <router-link
    to="/"
    @mouseover="(hover = true), $emit('switch')"
    @mouseout="(hover = false), $emit('switchOn')"
  >
    <img
      :class="{ visible: hover, invisible: !hover }"
      class="marquee-uni-image"
      src="../assets/school.jpg"
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
  props: ['universityName', 'universityImg'],
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
.marquee-uni-image {
  position: static;
  border-radius: 25px;
}

.marquee-uni-name {
  position: absolute;
  top: 150px;
  color: white;
  font-size: xx-large;
}
</style>
