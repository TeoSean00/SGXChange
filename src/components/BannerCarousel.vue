<template>
  <Carousel
    :itemsToShow="3"
    :wrapAround="true"
    :transition="1000"
    :autoplay="3500"
  >
    <Slide v-for="uniImg in uniImgList" :key="uniImg">
      <div class="carousel__item">
        <!-- {{ uniImg }} -->
        <img class="caroImg" :src="uniImg" alt="" />
      </div>
    </Slide>

    ...
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",

  data() {
    return {
      uniImgList: [
        "https://firebasestorage.googleapis.com/v0/b/wad2-sgxchange.appspot.com/o/BannerCarousel%2FUni-portrait-1.jpg?alt=media&token=58215901-4a0e-4e70-bce8-8fb8c7aab354",
        "https://firebasestorage.googleapis.com/v0/b/wad2-sgxchange.appspot.com/o/BannerCarousel%2FUni-portrait-2.jpg?alt=media&token=47b64af8-d07b-4d88-b154-88f979038101",
        "https://firebasestorage.googleapis.com/v0/b/wad2-sgxchange.appspot.com/o/BannerCarousel%2FUni-portrait-3.jpg?alt=media&token=bcb7223c-b106-4410-8ade-41fc71ea96d0",
      ],
    };
  },

  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>

<style scoped>
.carousel__item {

  height: 100%;
}
.caroImg {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
