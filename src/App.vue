<template>
  <v-app id="app">
    <app-particle
              :myName="name"
              :dialogue="dialogue"
              @openSesameIntro="dialogue = $event"
              @nameWasReset="name = $event"></app-particle>
<div name="underHero">
  <!-- <v-navigation-drawer app></v-navigation-drawer> -->
  <!-- <v-toolbar app></v-toolbar> -->
                <v-flex name="right-buttons" style="positon: absolute; right: 0px">

                  <v-btn @click="openIntroDialogue" color="primary" v-if="showMainButton">
                    See the Intro to How We Did This
                  </v-btn>

                </v-flex>
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
    showMainButton: true,
    openIntroDialogue: true,
    dialogue: false,
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



