<template>
  <div class="map-wrapper">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :useGlobalLeaflet="false" :options="mapOptions">
      <l-tile-layer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="CartoDB Positron"
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      ></l-tile-layer>

      <l-marker v-for="(marker, index) in markers" :key="index" :lat-lng="marker.coords">
        <l-tooltip>{{ marker.name }}</l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LTooltip } from '@vue-leaflet/vue-leaflet';

const zoom = ref(2);
const center = ref([25, 10]);
const mapOptions = ref({
  zoomControl: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  dragging: false,
});

const markers = ref([
  { name: 'USA', coords: [37.0902, -95.7129] },
  { name: 'Egypt (HQ)', coords: [26.8206, 30.8025] },
  { name: 'UAE', coords: [23.4241, 53.8478] },
  { name: 'Germany', coords: [51.1657, 10.4515] },
  { name: 'Saudi Arabia', coords: [23.8859, 45.0792] },
  { name: 'UK', coords: [55.3781, -3.4360] },
  { name: 'France', coords: [46.2276, 2.2137] },
  { name: 'Italy', coords: [41.8719, 12.5674] },
  { name: 'Spain', coords: [40.4637, -3.7492] },
  { name: 'Japan', coords: [36.2048, 138.2529] },
]);
</script>

<style scoped>
.map-wrapper {
  width: 100%;
  height: 100%;
  z-index: 1;
}

:deep(.leaflet-container) {
  background: transparent;
  font-family: 'Inter', sans-serif;
}
</style>
