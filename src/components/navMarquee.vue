<template>
  <Vue3Marquee
    :gradient="true"
    :gradientColor="[255, 255, 255]"
    :gradientWidth="`30%`"
  >
    <span> SGxchange Connecting students worldwide </span>
  </Vue3Marquee>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";

export default {
  name: "ImagesWithGradient",
  components: {
    Vue3Marquee,
  },
};
</script>

<style scoped>
Vue3Marquee {
  width: 10px;
}
</style>
