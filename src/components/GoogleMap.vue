<template>
  <div class="container mapbox overflow-auto">
    <div class="row">
      <div class="col-12 col-md-4 navigation-panel overflow-auto order-1 order-md-0" style="height:30vh">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span>{{ uniName }} Map</span>
          <button
            type="button"
            class="btn attractionButton float-end"
            @click="resetCenter()"
          >
            Reset
          </button>
        </h4>
        <hr />
        <h5>Nearby Attractions</h5>

        <div :key="index" v-for="(m, index) in extras" class="mx-0">
          <!-- Nearby Attraction Cards -->
          <div
            class="attractionButton text-black px-4"
            style="cursor: pointer; font-size: 15px; background-color: "
            @click="
              openMarker(m.id);
              reCenter(m.position.lat, m.position.lng);
            "
          >
            <div class="text-left">
              <span
                class=""
                style="


                "
                >{{ m.id + 1 }}. {{ m.name }}</span
              >
              <p class="" style="font-size: 10px">
                Rating: {{ m.rating }}
                <i v-if="m.rating != 'NA'" class="bi bi-star-fill"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 ">
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
            :icon="'https://maps.google.com/mapfiles/marker_yellow.png'"
            :clickable="true"
            @click="openMarker(m.id)"
            @closeclick="openMarker(null)"
            :opened="openedMarkerID === m.id"
          >
            <GMapInfoWindow
              :closeclick="true"
              :opened="openedMarkerID === m.id"
            >
              <div>
                {{ m.id + 1 }}. {{ m.name }}
                <MyComponent />
              </div>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapMap>
      </div>
    </div>
  </div>
  <hr />
</template>
<script>
export default {
  props: ["lati", "long", "extras", "nearbyName", "uniName"],
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
    resetCenter() {
      this.latitude = this.lati;
      this.longtitude = this.long;
    },
  },
};
</script>

<style scoped>
.attractionButton {
  background-color: #e6f7ff;
  width: 100%;
  margin: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.navigation-panel {
  position: relative;
}

.mapbox {
  height: 30vh;
  position: relative;
}
.gMap {
  width: 100%;
  height: 100%;
  min-height: 30vh;
  position: relative;
}
</style>
