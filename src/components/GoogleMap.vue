<template>
  <div class="container mapbox overflow-auto my-4">
    <div class="row">
      <div class="col-12 col-xl-4 navigation-panel overflow-auto  order-1 order-xl-0" style="height:50vh">
        <h6 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-uppercase">Click on nearby attractions to explore</span>
          <!-- <span>{{ uniName }} Map</span> -->
          <button
            type="button"
            class="btn attractionButton float-end"
            @click="resetCenter()"
          >
            Reset
        </button>
        </h6>
        <hr />
        <h6 class="mb-3">Nearby Attractions:</h6>
        <div :key="index" v-for="(m, index) in extras" class="mb-2">
          <!-- Nearby Attraction Cards -->
            <a class=" btn rounded-pill attraction-badge text-center"
            style="cursor: pointer;
            font-size: 15px;
            background-color: "
            @click="
              openMarker(m.id);
              reCenter(m.position.lat, m.position.lng);
            ">
              <span
                class=""
                >{{ m.name }}</span
              >
              <p style="font-size: 10px; margin:0;">
                Rating: {{ m.rating }}
                <i v-if="m.rating != 'NA'" class="bi bi-star-fill"></i>
              </p>
            </a>
        </div>
      </div>
      <div class="col-12 col-xl-8 ">
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
      // console.log(id);
      // console.log(this.openedMarkerID);
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
  background-color: #2fc78a;
  width: 30%;
  margin: 4px;
  font-size: 1rem;
  color:white;
}
button {
  border:none;
}
.attractionButton:hover {
  background-color: #2fc78a96;
  width: 30%;
  margin: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color:white;
}
.attraction-badge {
  background-color: #40a9ff;
  color:white;
  width: 80%;
  padding: 2px;
}
.attraction-badge:hover {
  background-color: #40a9ffc5;
  color:white;
  width: 80%;
  padding: 2px;
}

.navigation-panel {
  position: relative;
}

.mapbox {
  height: 50vh;
  position: relative;
}
.gMap {
  width: 100%;
  height: 100%;
  min-height: 50vh;
  position: relative;
}
</style>
