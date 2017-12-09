<template>
  <v-app id="app">
    <app-particle
              :myName="name"

              @nameWasReset="name = $event"></app-particle>
<div name="underHero">
  <!-- <v-navigation-drawer app></v-navigation-drawer> -->
  <!-- <v-toolbar app></v-toolbar> -->

  <v-content>
    <under-the-hood></under-the-hood>
    <router-view>
      <v-container fluid></v-container>
    </router-view>
  </v-content>
</div>
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
    name: "Max You Rock!!!",
    //dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    select: [
      { text: "State 1" },
      { text: "State 2" },
      { text: "State 3" },
      { text: "State 4" },
      { text: "State 5" },
      { text: "State 6" },
      { text: "State 7" }
    ]
  })
};
</script>



