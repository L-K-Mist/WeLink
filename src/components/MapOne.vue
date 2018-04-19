<template>
<v-container>
<v-btn @click.stop="showStreetMap">Street Map</v-btn>
<v-btn @click.stop="showTerrainMap">Terrain</v-btn>
<v-btn @click.stop="showRailwayMap">Railway Lines</v-btn>
<v-btn @click.stop="showElectricityMap">Power Infrastructure</v-btn>
  <div id="map" class="map"></div>
</v-container>
</template>

<script>
import map from "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";

export default {
  mounted() {
    this.initMap();
    this.showStreetMap();
    this.initLayers();
  },
  data() {
    return {
      map: null,
      tileLayer1: null,
      terrainLayer: null,
      layers: []
    };
  },
  methods: {
    showStreetMap() {
      this.tileLayer1 = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      );
      this.tileLayer1.addTo(this.map);
    },
    showTerrainMap() {
      this.terrainLayer = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 18,
          attribution:
            "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        }
      );
      this.terrainLayer.addTo(this.map);
    },
    showRailwayMap() {
      this.OpenRailwayMap = L.tileLayer(
        "https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }
      );
      this.OpenRailwayMap.addTo(this.map);
    },
    showElectricityMap() {
      this.electricityLayer = L.tileLayer(
        "https://tiles-{s}.openinframap.org/power/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://www.openinframap.org/about.html">About OpenInfraMap</a>'
        }
      );
      this.electricityLayer.addTo(this.map);
    },
    initMap() {
      this.map = L.map("map").setView([-25.953724, 32.588711], 8);

      //   this.darkMatterLayer = L.tileLayer(
      //     "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
      //     {
      //       attribution:
      //         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
      //       subdomains: "abcd",
      //       maxZoom: 19
      //     }
      //   );
      //   this.darkMatterLayer.addTo(this.map);
    },
    initLayers() {}
  }
};
</script>

<style scoped>
.map {
  height: 50vw;
  width: 60vw;
}
</style>


