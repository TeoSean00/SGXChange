<template>
  <GMapMap
    class="gMap"
    :center="center"
    :zoom="14"
    map-type-id="roadmap"
    :options="{
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: false,
    }"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
    />
    <GMapMarker
      :key="index"
      v-for="(m, index) in extras"
      :position="m.position"
      :icon="'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'"
      :clickable="true"
    />
    <!-- https://www.nicepng.com/png/detail/37-373764_javascript-adding-a-custom-map-marker-icon-to.png -->
  </GMapMap>
</template>
<script>
export default {
  props: ["lati", "long", "extras"],
  data() {
    return {};
  },
  mounted() {
    console.log("Center is below");
    console.log(this.center);
    // this.center = { lat: this.lati, lng: this.long };
    // (this.markers = [
    //   {
    //     position: {
    //       lat: this.lati,
    //       lng: this.long,
    //     },
    //   },
    // ]),
    // console.log(this.center);
    console.log(this.markers);
  },

  computed: {
    center() {
      return { lat: this.lati, lng: this.long };
    },
    markers() {
      return [
        {
          position: {
            lat: this.lati,
            lng: this.long,
          },
        },
      ];
    },
    // extras() {
    //   return [
    //     {
    //       position: {
    //         lat: 31.3066,
    //         lng: 121.494,
    //       },
    //     },
    //   ];
    // },
  },
};
// console.log(this.lat);
</script>

<style scoped>
.gMap {
  width: 100%;
  height: 300px;
}
</style>
