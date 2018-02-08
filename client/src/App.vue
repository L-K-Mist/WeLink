<template>
  <v-app id="app">
        <!-- <v-navigation-drawer app></v-navigation-drawer> -->
        <!-- <v-toolbar app></v-toolbar> -->
    <v-layout column>
      <v-toolbar fluid class="transparent ml-0" name="dashboard-toolbar"  v-if="counter >= 9"  style="position: absolute;
                                            width: 100%;
                                            height: 70px;
                                            left: 10px;
                                            top: 0px;"
                                            >
        <v-layout fluid row wrap>
          <v-flex left xs4 name="welink-logo" >
            <img :src="welinkLogo" alt="Welink" style="position: absolute; left: 10px; width: 200px" transition="slide-x-transition"  >
          </v-flex>
          <v-flex xs4>
            <click-counter></click-counter>                  
          </v-flex>
          
          <v-flex>
            <v-btn color="primary" style="position: absolute; right: 30px" @click.native.stop="openHowMade">See How it's Made</v-btn>
          </v-flex>
        </v-layout>
      </v-toolbar>
    </v-layout>
    
    <v-content>
    <intro-sequence></intro-sequence>
    <router-view></router-view>

    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import IntroSequence from "./components/Intro/IntroSequence";
import welinkLogo from "@/assets/welink-logo-pwa.png";
import VueFrame from "vue-frame";
import ClickCounter from "@/components/Intro/ClickCounter";
import { Emoji } from "emoji-mart-vue";

export default {
  components: {
    ClickCounter,
    VueFrame,
    IntroSequence,
    emoji: Emoji
  },
  data: () => ({
    // name: "Max You Rock!!!"
    welinkLogo,
    name: ""
  }),
  computed: {
    counter: {
      get() {
        return this.$store.getters.clickCount;
      },
      set(value) {
        return this.$store.dispatch("setCounter", value);
      }
    }
  }
};
</script>



