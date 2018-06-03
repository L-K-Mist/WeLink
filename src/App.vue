<template>
  <v-app id="app">
        <!-- <v-navigation-drawer app></v-navigation-drawer> -->
        <!-- <v-toolbar app></v-toolbar> -->
    <v-layout column>
      <v-toolbar fluid class="transparent ml-0" name="dashboard-toolbar"  v-if="counter >= 9"  style="position: absolute;
                                            
                                            height: 70px;
                                            left: 10px;
                                            top: 0px;
                                            z-index: 10"
                                            >
        <v-layout fluid row wrap>
          <v-flex left xs4 name="welink-logo" >
            <img :src="welinkLogo" alt="Welink" style="position: absolute; left: 10px; width: 200px" transition="slide-x-transition"  >
          </v-flex>
          <v-flex xs1>
            <click-counter></click-counter>                  
          </v-flex>
          
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.native.stop="openHowMade">How This Site Was Made</v-btn>
          <v-btn color="primary" @click.native.stop="openActivityLog">Something Usefull I'm working on</v-btn>
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
  // TODO: Add smiley to button
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
  },
  methods: {
    openHowMade: function() {
      this.$store.dispatch("setHowDialogue", true);
    },
        openActivityLog: function() {
      this.$store.dispatch("openActivityLog", true);
    }
  }
};
</script>



