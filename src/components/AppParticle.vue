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
      <div name="hero-bkg" class="wrap-banner" @click="incrementCounter(); clickSwitchCase()">
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
        <v-container fluid fill-height>
          <v-layout flex align-center justify-center>
            <v-flex >
              <word-play></word-play>
            </v-flex>
          </v-layout>          
        </v-container>
        
          <!-- START OF LOGO -->
          <!-- ====================================================================== -->
          <v-layout column>
            <v-toolbar fluid class="transparent ml-0" name="dashboard-toolbar"  v-if="showLogo"  style="position: absolute;
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
                <v-flex xs4>
                  <v-btn color="primary" style="position: absolute; right: 10px" primary  @click.native.stop="openThanksTee">See what this App is Built out of</v-btn>
                </v-flex>
              </v-layout>
            </v-toolbar>
          </v-layout>
          <v-flex >
            <v-alert style="position: absolute; top: 70px; right: 10px"
                    color="success"
                    icon="info_circle"
                    transition="slide-x-reverse-transition"
                    dismissible
                    v-model="alert"
                    class="elevation-20">
              {{ alertMessage }}
            </v-alert>
          </v-flex>
      </div>
    </v-app>
  </div>
</template>

<script>
//TODO SOON
// NEXT events
// THEN make screen slide dynamically to get top of particle to become the banner
//import Foot from "./components/Foot";
//import MainContent from "./components/Main";
import stars from "@/assets/starrysky.jpg";
import welinkLogo from "@/assets/welink-logo-pwa.png";
import ClickCounter from "./Intro/ClickCounter";
import { mapActions } from "vuex";
import WordPlay from "./Intro/WordPlay";

export default {
  name: "app",
  components: {
    ClickCounter,
    WordPlay
    //Foot,
    //MainContent
  },
  // events: {
  //   grabThisEvent: function(msg) {
  //     alert(msg);
  //   }
  // },
  data: () => ({
    msg: "Welcome to Your Vue.js App",
    welinkLogo: welinkLogo,
    //These data items below have been moved to Vuex store
    //showLogo: false,
    //showComingSoon: false,
    //showWatchSpace: false,
    //showSharingHow: false,

    //drawer: null,
    //counter: 0,
    //info alert change the text value then make true
    alert: false,
    alertMessage: "Have you tried clicking and tapping around the screen?",
    onTimer: ""
  }),
  computed: {
    showTee: function() {
      return this.$store.getters.teeDialogueState;
    },
    counter: function() {
      return this.$store.getters.clickCount;
    },
    showFab: function() {
      return this.$store.getters.seeLoveFab;
    },

    // Pull these out into counter note: copies are already pulled out into WordPlay.vue
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
    resetName: function() {
      console.log("nameWasReset Emitted from AppParticle");
    },
    resetCounter: function() {
      return (this.$store.state.counter = 0);
    },
    notify: function() {
      this.$dispatch("grabThisEvent", "I'm a message!");
    },
    // logoOn: function() {
    //   setTimeout(this.logoOff, 3000);
    //   return (this.showLogo = true);
    // },
    // logoOff: function() {
    //   return (this.showLogo = false);
    // },
    sendAlertMessage: function() {
      this.alertMessage =
        "See the Primary Button above me? Click to learn more, when you're done exploring and creating";
      this.alert = true;
    },
    //NTS Dylan you must slide alerts from right to left, because we read from left to right

    //TODO: After all others. Pull this out to counter vuex module
    clickSwitchCase: function() {
      switch (this.counter) {
        case 3:
          this.showComingSoon = true;
          break;
        case 4:
          //DEBUGGING ONLY
          this.notify;
          break;
        case 5:
          this.showWatchSpace = true;
          break;
        case 8:
          this.showSharingHow = true;
          //this.showWatchSpace = true;
          break;
        case 9:
          this.showLogo = true;
          break;
        case 13:
          this.showWatchSpace = false;
          this.showSharingHow = false;
          break;
        case 14:
          //this.sendAlertMessage();
          break;
        case 15:
          this.sendAlertMessage();
          break;
        case 17:
          this.$store.dispatch("revealLoveFab");
          //this.$store.state.seeLoveFab = true; <-- old way
          console.log("seeLoveFab updated from count");
          console.log(this.$store.state.seeLoveFab);
          //this.resetCounter();
          //this.counter = 0;
          break;
      }
    }
  }

  // beforeDestroy() {
  //   //clearInterval(this.onTimer);
  //   this.counter = 0;
  // }
};
</script>


