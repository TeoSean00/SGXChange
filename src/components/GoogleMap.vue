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
      @click="reCenter(lati, long)"
    >
    </GMapMarker>

    <GMapMarker
      :key="index"
      v-for="(m, index) in extras"
      :position="m.position"
      :icon="'http://maps.google.com/mapfiles/marker_yellow.png'"
      :clickable="true"
      @click="openMarker(m.id)"
      @closeclick="openMarker(null)"
      :opened="openedMarkerID === m.id"
    >
      <GMapInfoWindow :closeclick="true" :opened="openedMarkerID === m.id">
        <div>
          {{ m.id + 1 }}. {{ m.name }}
          <MyComponent />
        </div>
      </GMapInfoWindow>
    </GMapMarker>
    <!-- https://www.nicepng.com/png/detail/37-373764_javascript-adding-a-custom-map-marker-icon-to.png -->
  </GMapMap>
  <div class="row">
    <div :key="index" v-for="(m, index) in extras">
      <!-- Nearby Attraction Cards -->
      <div class="col">
        <div
          class="card"
          style="max-width: 18rem"
          @click="
            openMarker(m.id);
            reCenter(m.position.lat, m.position.lng);
          "
        >
          <div class="card-body">
            <h5 class="card-title">{{ m.id + 1 }}. {{ m.name }}</h5>
            <p class="card-text">
              Rating: {{ m.rating }}
              <i v-if="m.rating != 'NA'" class="bi bi-star-fill"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 
  <p class="card-text">Address: {{ m.address }}</p>
  {{ nearbyName[index] }}
  :icon="{
        url: nearbyIcon[index],
        scaledSize: { width: 25, height: 25 },
      }" -->
<script>
export default {
  props: ["lati", "long", "extras", "nearbyName"],
  data() {
    return {
      openedMarkerID: null,
      longtitude: 0,
      latitude: 0,
    };
  },
  watch: {
    lati() {
      this.latitude = this.lati;
    },
    long() {
      this.longtitude = this.long;
    },
  },

  computed: {
    center() {
      return { lat: this.latitude, lng: this.longtitude };
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
  },
  methods: {
    openMarker(id) {
      console.log(id);
      console.log(this.openedMarkerID);
      if (this.openedMarkerID == id) {
        this.openedMarkerId = null;
      } else {
        this.openedMarkerID = id;
      }
    },
    reCenter(lat, lng) {
      this.latitude = lat;
      this.longtitude = lng;
    },
  },
};
</script>

<style scoped>
.gMap {
  width: 100%;
  height: 300px;
}
</style>
