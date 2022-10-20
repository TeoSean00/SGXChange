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
    <h2 class="marquee-uni-name display-5 text-center">University Name</h2>
  </router-link>
</template>

<script>
export default {
  name: "MarqueeCard",
  emits: ["switch", "switchOn"],
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
}
</style>
