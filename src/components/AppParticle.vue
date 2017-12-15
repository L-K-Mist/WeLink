<template>
  <div id="app">


    <!-- there was some creative power of chance in this one -->
    <v-app>

            <v-btn style="position: absolute; bottom: 60px; right: 60px"
              color="pink"
              dark
              large
              absolute
              bottom
              right
              fab
               v-show="!hidden"
            >
              <v-icon x-large>favorite_border</v-icon>
            </v-btn>

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
                  <h1 style="color: white">{{ myName }}  {{ counter }}</h1>
                </v-flex>

                <v-flex xs4>
                  <v-btn color="primary" style="position: absolute; right: 10px" primary  @click.native.stop="openIntroDialogue">See what this App is Built out of</v-btn>
                </v-flex>
              </v-layout>
            </v-toolbar>
          </v-layout>
        <div class="app-front mb-0 pb-0" style="display: inline-block;
                        color: white;
                        text-shadow: 2px 2px 4px #000000;
                        font: 30px Teko, sans-serif;
                        position: absolute;
                        top: 20%
                        ">
          <transition appear
                enter-active-class="animated zoomInDown"
                leave-active-class="animated bounceOutRight" v-if="showComingSoon">
            <div>
              <h1 @click="showComingSoon = false" style="cursor: pointer" >
                WeLink 2.0 Coming Soon...
              </h1>
            </div>
          </transition>
        </div>
          <div class="app-front text-xs-center" style="position: absolute; top: 50%">
            <transition appear
                    enter-active-class="animated zoomInUp"
                    leave-active-class="animated bounceOutRight">
              <div v-if="showWatch">
                <h2 @click="showWatch = false" class="text-xs-center" style="cursor: pointer" >
                  Watch This Space!
                </h2>
              </div>
            </transition>
            <transition appear
                    enter-active-class="animated zoomInUp"
                    leave-active-class="animated bounceOutRight">
              <div  v-if="showSharing">
                <h3 @click="showSharing = false" style="cursor: pointer" >
                  <i>We'll be sharing how we did it as we do it.</i>
                </h3>
              </div>
            </transition>
            <transition appear
                    enter-active-class="animated zoomInUp"
                    leave-active-class="animated bounceOutRight">
              <div name="last-word" v-if="showSharing">
                <h3 @click="showSharing = false" style="cursor: pointer" >
                  <i>So enjoy the clicks, I'll be back soon</i>
                </h3>
              </div>
            </transition>
          </div>
          <v-flex >
            <v-alert style="position: absolute; top: 70px; right: 10px"
                    color="success"
                    icon="info_circle"
                    transition="slide-x-reverse-transition"
                    dismissible
                    v-model="alert">
              {{ alertMessage }}
            </v-alert>
          </v-flex>
        <!-- SWITCHES -->
        <div v-if="counter > 10" style="position: absolute; left: 1%; z-index: 8"
        transition="slide-x-transition">
          <v-layout column>
            <v-switch light
              v-model="showComingSoon">
            </v-switch>
            <v-switch light
              v-model="showWatch">
            </v-switch>
            <v-switch light
              v-model="showSharing">
            </v-switch>
            <v-switch light @click="resetCounter" value="true" ></v-switch>
          </v-layout>
        </div>
      </div>
      <!-- <div  style="position: absolute; top: 110%; height: 100%"> -->
        <!-- <v-container style="position: absolute; top: 150%"> -->

      <!-- </div> -->
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

export default {
  name: "app",
  components: {
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
    showLogo: false,
    showComingSoon: false,
    showWatch: false,
    showSharing: false,
    //drawer: null,
    counter: 0,
    //info alert change the text value then make true
    alert: false,
    alertMessage: "Have you tried clicking and tapping around the screen?",
    onTimer: ""
  }),
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
    openIntroDialogue: function() {
      this.$store.state.dialogue = true;
      console.log(this.$store.state.dialogue);
    },
    resetName: function() {
      console.log("nameWasReset Emitted from AppParticle");
    },
    resetCounter: function() {
      return (this.counter = 0);
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
    incrementCounter: function() {
      return this.counter++;
    },
    sendAlertMessage: function() {
      this.alertMessage =
        "See the Primary Button above me? Click to learn more, when you're done exploring and creating";
      this.alert = true;
    },
    //NTS Dylan you must slide alerts from right to left, because we read from left to right
    clickSwitchCase: function() {
      switch (this.counter) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          //this.showLogo = false;
          break;
        case 3:
          this.showComingSoon = true;
          break;
        case 4:
          //DEBUGGING ONLY
          this.notify;
          break;
        case 5:
          this.showWatch = true;
          break;
        case 7:
          break;
        case 8:
          this.showSharing = true;
          //this.showWatch = true;
          break;
        case 9:
          this.showLogo = true;
          break;
        case 10:
          break;
        case 11:
          break;
        case 12:
          // this.showComingSoon = false;
          break;
        case 13:
          this.showWatch = false;
          this.showSharing = false;
          break;
        case 14:
          //this.sendAlertMessage();
          break;
        case 15:
          this.sendAlertMessage();
          break;
        case 16:
          //this.resetCounter();
          //this.counter = 0;
          break;

        default:
          console.log("switchCase error! fell through to default");
      }
    }
  },

  beforeDestroy() {
    //clearInterval(this.onTimer);
    this.counter = 0;
  }
};
</script>

<style>
*,
:after,
:before {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  background: #34393f;
}

h1 {
  font-size: 200%;
}

h2 {
  font-size: 150%;
}

p {
  font-size: 100%;
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-front {
  z-index: 1;
  display: inline-block;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  padding: 0;
  margin: 0;
}

#particles-js {
  background-image: url("../assets/starrysky.jpg");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

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
