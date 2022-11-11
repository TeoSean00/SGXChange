<template>
  <div class="container mapbox overflow-auto">
    <div class="row">
      <div class="col-4 navigation-panel overflow-auto">
        <h4>{{ uniName }} Map</h4>
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
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
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
      <div class="col-8">
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
          <!-- https://www.nicepng.com/png/detail/37-373764_javascript-adding-a-custom-map-marker-icon-to.png -->
        </GMapMap>
      </div>
    </div>
  </div>
  <hr />
  <!-- <GMapMap
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
  </GMapMap> -->
  <!-- <h4 class="py-2">Nearby Attractions</h4>
  <div class="d-flex flex-wrap">
    <div :key="index" v-for="(m, index) in extras" class="px-3">
      <div
        class="rounded-pill bg-primary text-white px-4"
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
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
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
  </div> -->
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
  },
};
</script>

<style scoped>
.attractionButton {
  background-color: #e6f7ff;
}

.navigation-panel {
  position: absolute;
  /* overflow-y: scroll; */
  top: 8px;
  left: 8px;
}

.mapbox {
  height: 30vh;
  position: relative;
}
.gMap {
  width: 65%;
  height: 100%;
  position: absolute;
  top: 8px;
  right: 16px;
}
</style>
