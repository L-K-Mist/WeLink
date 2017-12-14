<template>
  <v-app id="app">
    <app-particle
              :myName="name"></app-particle>

        <!-- <v-navigation-drawer app></v-navigation-drawer> -->
        <!-- <v-toolbar app></v-toolbar> -->
        <v-content>
        <under-the-hood></under-the-hood>

          <router-view>

          </router-view>
        </v-content>

    <!-- <v-footer app></v-footer> -->
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
    // name: "Max You Rock!!!"

    name: ""
  })
};
</script>



