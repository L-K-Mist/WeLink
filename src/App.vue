<template>
  <div id="app">
    <h1 style="color: white">{{ counter }}</h1>
    <!-- there was some creative power of chance in this one -->
    <v-app>
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
          clickMode="push"
        ></vue-particles>
        <div name="welink-logo" v-if="showLogo" class="app-front" style="position: absolute;
                                              left: 10px;
                                              top: 10px;
                                              text-align: left" >
          <img :src="welinkLogo" alt="Welink">
          <div name="buttonPanel" style="opacity: 0.5; top: 20%; z-index: 1">
            <v-btn @click="showComingSoon=!showComingSoon">Toggle Coming Soon</v-btn>
            <v-btn @click="showSharing=!showSharing">Toggle Show Sharing</v-btn>
            <v-btn @click="showWatch=!showWatch">Toggle Watch This Space</v-btn>
          </div>

        </div>
        <div class="app-front mb-0 pb-0"
        style="display: inline-block;
                        color: white;
                        text-shadow: 2px 2px 4px #000000;
                        font: 40px Teko, sans-serif;
                        align-items: center
                        ">
          <transition appear
                enter-active-class="animated zoomInDown"
                leave-active-class="animated bounceOutRight" v-if="showComingSoon">
          <div>
            <h1>
              WeLink 2.0 Coming Soon...
            </h1>
          </div>
          </transition>

        </div>


          <div class="app-front text-xs-center" style="position: absolute; top: 60%">
            <transition appear
                    enter-active-class="animated zoomInUp"
                    leave-active-class="animated bounceOutRight">
              <div v-if="showWatch">
                <h2 class="text-xs-center" >
                  Watch This Space!
                </h2>
              </div>
            </transition>

            <transition appear
                    enter-active-class="animated zoomInUp"
                    leave-active-class="animated bounceOutRight">
              <div  v-if="showSharing">
                <h3>
                  <i>We'll be sharing how we did it as we do it.</i>
                </h3>
              </div>
            </transition>
            <transition appear
                    enter-active-class="animated zoomInUp"
                    leave-active-class="animated bounceOutRight">
              <div  v-if="showSharing">
                <h3>
                  <i>So enjoy the clicks, I'll be back soon</i>
                </h3>
              </div>
            </transition>

          </div>
      </div>
      <div style="
              position: relative
              "><v-alert
          color="success"
          icon="check_circle"
          transition="scale-transition"
          dismissible
          v-model="alert"

        >
          {{ alertMessage }}
        </v-alert></div>

      <!-- <main-content></main-content> -->
      <!-- <foot></foot> -->
    </v-app>

  </div>
</template>

<script>
//import Foot from "./components/Foot";
//import MainContent from "./components/Main";
import stars from "./assets/starrysky.jpg";
import welinkLogo from "./assets/welink-logo-pwa.png";

export default {
  name: "app",
  components: {
    //Foot,
    //MainContent
  },
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
    alertMessage: "Have you tried left-clicking?",
    onTimer: ""
  }),
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
      this.alert = false; // |this| properly refers to the person object
    }, delay + displayFor);
  },
  methods: {
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
          this.showComingSoon = false;
          this.showWatch = false;
          this.showSharing = false;
          break;
        case 11:
          break;
        case 12:
          break;
        case 13:
          break;
        case 14:
          break;
        case 15:
          this.showLogo = true;
          break;
        case 10:
          //this.counter = 0;
          break;

          this.showLogo = false;

          break;

          this.showWatch = false;
          this.showWatch = false;
          break;
          // case 8:
          this.showComingSoon = true;
          //   this.showWatch = true;
          //   break;
          this.showSharing = true;
        // case 8:
        //   this.showWatch = true;
        //   break;
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
  background-image: url("./assets/starrysky.jpg");
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
