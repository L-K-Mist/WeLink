<template>
  <div id="app">
    <!-- there was some creative power of chance in this one -->
    <v-app>
      <transition appear
                    enter-active-class="animated bounceInDown"
                    leave-active-class="animated wobble">
            <v-btn class="elevation-5" style="position: absolute; bottom: 60px; right: 60px"
              color="pink"
              dark
              large
              absolute
              bottom
              right
              fab
               v-show="showFab"
               @click="openTeeDialogue"
            >
              <v-icon x-large>favorite_border</v-icon>
            </v-btn>
      </transition>
      <!-- <div style="display: inline-block; position: relative; top: 90%; z-height: 2"> -->
      <!-- </div> -->
      <!--<img src="./assets/logo.png">-->
      <!-- <div v-on:click="firstFunction(); secondFunction();"></div> -->
      <div name="hero-bkg" class="wrap-banner text-xs-center" @click="incrementCounter(); clickSwitchCase()">
        <vue-particles
          color="#ffffff"
          :particleOpacity="0.7"
          linesColor="#ffffff"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="5"
          :linesWidth="2"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push">
        </vue-particles>
        <v-content>
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs-12 class="text-xs-center">
                <word-play></word-play>
              </v-flex>
            </v-layout>          
          </v-container>
        </v-content>
        
          <!-- START OF LOGO -->
          <!-- ====================================================================== -->
          <!-- <v-layout column>
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
          </v-layout> -->
          <v-flex >
            <v-alert style="position: relative; top: 70px; right: 10px"
                    color="success"
                    icon="info_circle"
                    transition="slide-x-reverse-transition"
                    dismissible
                    v-model="alert"
                    class="text-xs-left elevation-20">
                    <strong>{{ alertMessage }}</strong>
              
            </v-alert>
          </v-flex>
          <under-the-hood></under-the-hood>
          <tee-thanks></tee-thanks>
      </div>
    </v-app>
  </div>
</template>

<script>
//TODO SOON Fix how it's made button to show How it's made NOT thanks Tee
// NEXT events
// THEN make screen slide dynamically to get top of particle to become the banner
//import Foot from "./components/Foot";
//import MainContent from "./components/Main";
import stars from "@/assets/starrysky.jpg";
import { mapActions } from "vuex";
import WordPlay from "@/components/Intro/WordPlay";
import UnderTheHood from "@/components/UnderTheHood";
import TeeThanks from "@/components/BaseHtml/ThanksTee";

export default {
  name: "app",
  components: {
    WordPlay,
    UnderTheHood,
    TeeThanks
  },
  data: () => ({
    msg: "Welcome to Your Vue.js App",
    // welinkLogo: welinkLogo,
    alert: false,
    alertMessage: "Have you tried clicking and tapping around the screen?",
    onTimer: ""
  }),
  computed: {
    showTee: function() {
      return this.$store.getters.teeDialogueState;
    },
    showFab: function() {
      return this.$store.getters.seeLoveFab;
    },
    counter: {
      get() {
        return this.$store.getters.clickCount;
      },
      set(value) {
        return this.$store.dispatch("setCounter", value);
      }
    },
    showComingSoon: {
      get() {
        return this.$store.getters.seeComingSoon;
      },
      set(newBool) {
        return this.$store.dispatch("setComingSoon", newBool);
      }
    },
    showWatchSpace: {
      get() {
        return this.$store.getters.seeWatchSpace;
      },
      set(newBool) {
        return this.$store.dispatch("setWatchSpace", newBool);
      }
    },
    showSharingHow: {
      get() {
        return this.$store.getters.seeSharingHow;
      },
      set(newBool) {
        return this.$store.dispatch("setSharingHow", newBool);
      }
    },
    showLogo: {
      get() {
        return this.$store.getters.seeLogoState;
      },
      set(newBool) {
        return this.$store.dispatch("setLogo", newBool);
      }
    }
  },
  props: {
    myName: {
      type: String
    }
  },
  created: function() {
    let delay = 10000;
    let displayFor = 5000;
    //this.flipPics();

    setTimeout(() => {
      if (this.counter < 2) {
        this.alert = true;
      } else this.alert = false;
      // |this| properly refers to the person object
    }, delay);
    setTimeout(() => {
      if ((this.alert = true)) this.alert = false; // |this| properly refers to the person object
    }, delay + displayFor);
  },
  methods: {
    ...mapActions([
      "incrementCounter", // map `this.increment()` to `this.$store.dispatch('increment')
      "openTeeDialogue"
    ]),
    // incrementCounter: function() {
    //   return this.counter++;
    // },
    // openTeeDialogue: function() {
    //   this.$store.state.teeDialogue = true;
    // },
    openThanksTee: function() {
      this.$store.dispatch("openTeeDialogue");
    },
    openHowMade: function() {
      this.$store.dispatch("openHowDialogue");
    },
    sendAlertMessage: function() {
      this.alertMessage =
        "See the Primary Button above me? Click to learn more, when you're done exploring and creating";
      this.alert = true;
    },
    clickSwitchCase: function() {
      switch (this.counter) {
        case 3:
          this.$store.dispatch("setComingSoon", true);
          break;
        case 5:
          this.$store.dispatch("setWatchSpace", true);
          break;
        case 8:
          this.$store.dispatch("setSharingHow", true);
          break;
        case 13:
          this.$store.dispatch("setWatchSpace", false);
          this.$store.dispatch("setSharingHow", false);
          break;
        case 15:
          this.sendAlertMessage();
          break;
        case 17:
          this.$store.dispatch("revealLoveFab");
          break;
        case 18:
          this.$store.dispatch("setComingSoon", false);
      }
    }
  },

  beforeDestroy() {
    //clearInterval(this.onTimer);
    this.$store.dispatch("setCounter", 0);
  }
};
</script>

<style>
.wrap-banner {
  position: relative;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>



