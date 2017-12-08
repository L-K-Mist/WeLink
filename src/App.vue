<template>
  <v-app id="app">
    <app-particle></app-particle>
<div name="underHero">
  <!-- <v-navigation-drawer app></v-navigation-drawer> -->
  <v-toolbar app></v-toolbar>
  <under-the-hood ></under-the-hood>
  <v-content>
    <router-view>
      <v-container fluid></v-container>
    </router-view>
  </v-content>
</div>
    <v-footer app></v-footer>

  </v-app>
</template>

<script>
import AppParticle from "./components/AppParticle";
import UnderTheHood from "./components/UnderTheHood";

export default {
  components: {
    AppParticle,
    UnderTheHood
  },
  data: () => ({
    underHeroOn: false,
    counter: 0 //trying prop
  })
};
</script>



