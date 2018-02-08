<template>
  <v-app id="app">
        <!-- <v-navigation-drawer app></v-navigation-drawer> -->
        <!-- <v-toolbar app></v-toolbar> -->
    <v-content>
    <intro-sequence></intro-sequence>
    <router-view></router-view>

    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import IntroSequence from "./components/Intro/IntroSequence";

import VueFrame from "vue-frame";

import { Emoji } from "emoji-mart-vue";

export default {
  components: {
    VueFrame,
    IntroSequence,
    emoji: Emoji
  },
  data: () => ({
    // name: "Max You Rock!!!"

    name: ""
  })
};
</script>



