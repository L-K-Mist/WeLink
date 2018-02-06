<template>
  <v-app id="app">
        <!-- <v-navigation-drawer app></v-navigation-drawer> -->
        <!-- <v-toolbar app></v-toolbar> -->
    <v-content>
    <app-particle></app-particle>
    <router-view></router-view>
    <under-the-hood></under-the-hood>
    <tee-thanks></tee-thanks>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import AppParticle from "./components/Intro/AppParticle";
import UnderTheHood from "./components/UnderTheHood";
import TeeThanks from "@/components/BaseHtml/ThanksTee";
import VueFrame from "vue-frame";

import { Emoji } from "emoji-mart-vue";

export default {
  components: {
    VueFrame,
    TeeThanks,
    AppParticle,
    UnderTheHood,
    emoji: Emoji
  },
  data: () => ({
    // name: "Max You Rock!!!"

    name: ""
  })
};
</script>



