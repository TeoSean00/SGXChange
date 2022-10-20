<template>
  <GMapMap class="gMap" :center="center" :zoom="15" map-type-id="terrain">
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      @click="openInfoWindow(marker.id)"
    />
  </GMapMap>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: 1.296568, lng: 103.852119 },
      markers: [
        {
          position: {
            lat: 1.296568,
            lng: 103.852119,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.gMap {
  width: 100%;
  height: 300px;
}
</style>
