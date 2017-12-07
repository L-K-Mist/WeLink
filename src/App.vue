<template>
  <v-app id="app">
    <app-particle></app-particle>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <router-view>
        <v-container fluid></v-container>
      </router-view>
    </v-content>
    <v-footer app></v-footer>

  </v-app>
</template>

<script>
import AppParticle from "./components/AppParticle";

export default {
  components: {
    AppParticle
  },
  data: () => ({}),
  props: {}
};
</script>



