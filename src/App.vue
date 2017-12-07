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
          clickMode="push">
        </vue-particles>
        <div name="welink-logo"  v-if="showLogo" class="app-front" style="position: absolute;
                                              left: 10px;
                                              top: 10px;
                                              text-align: left" >
          <img :src="welinkLogo" alt="Welink" style="width: 200px" transition="slide-x-transition"  >
          <!-- <div name="buttonPanel" style="opacity: 0.5; top: 20%; z-index: 1">
            <v-btn @click="showComingSoon=!showComingSoon">Toggle Coming Soon</v-btn>
            <v-btn @click="showSharing=!showSharing">Toggle Show Sharing</v-btn>
            <v-btn @click="showWatch=!showWatch">Toggle Watch This Space</v-btn>
          </div> -->
        </div>
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
            <h1>
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
              <div v-if="showSharing">
                <h3>
                  <i>So enjoy the clicks, I'll be back soon</i>
                </h3>
              </div>
            </transition>
          </div>
          <div style="position: relative">
                <v-alert
            color="success"
            icon="check_circle"
            transition="scale-transition"
            dismissible
            v-model="alert">
            {{ alertMessage }}
          </v-alert>
        </div>



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
          </v-layout>
        </div>
      </div>
      <!-- <div  style="position: absolute; top: 110%; height: 100%"> -->
        <!-- <v-container style="position: absolute; top: 150%"> -->
        <v-container>
          <v-layout row wrap>
            <v-container>


              <v-flex xs11 md9 style="justify-content: center" >
                <v-card>
                    <div>
                      <v-flex xs11 md9 class="text-xs-center">
                        <h1 id="what-s-under-the-hood">What&#39;s under the Hood</h1>
                        <p>We stand on the shoulders of Giants, and this website is no exception!</p>
                        <p>None of this would have been possible AND performant, without the latest developments (on top of last year&#39;s latest developments) in programming.</p>
                        <h1 id="soooo-big-thanks-to-">SOooo Big Thanks to:</h1>
                        <v-card>

                          <p>VueJS for being the over-all Front-End Framework - the thing we plug the other frameworks into (mostly).</p>
                          <p>Why vue? Reactive, Performant, light.</p>
                          <p>React (as in Facebook) and Angular (as in Gmail) are great, but sometimes tight budgets result in frugal code.
                          Plus there&#39;s an air of victory around Evan You&#39;s creation - David and Goliath vibes... although he seems to get much love from Google?  :) [use chips plus smileys]</p>
                          <p>Although each is great, capable of producing similarly functional websites/apps; (Gmail is built on Angular, Facebook on React) we find that vue is, nimbler, and independent.</p>
                          <hr>

                        </v-card>

                      </v-flex>
                      <p>Vuetify for it&#39;s implementation of Google&#39;s Beautiful Material Design Spec.</p>
                      <p>Vuetify in a nutshell: Vuetify provides the button, card, and slider components generally used in this site. These components follow Google&#39;s Material Design Spec. Reading through their documentation is like a crash-course in design itself - Thank Google! </p>
                      <hr>
                      <p>vue-particle for the playful Particle Component you were playing with on the Landing Page Hero Element.</p>
                      <p>Netlify for their (so far free  -  and Supa-Fast) cdn-hosting of this site.</p>
                      <p>Netlify in a nutshell: Netlify is a Helpful Static-Site Hosting solution and Content Delivery Network.</p>
                      <p>So yes, at the moment this is a server-less, <em>static</em> app, served via cdn (Content Delivery Network)</p>
                      <hr>
                      <p>Special Mention: NodeJs
                      This site is not - strictly speaking - a Nodejs application; as it doesn&#39;t run off of a NodeJs Server. However, NodeJs is so fundamental to what&#39;s happening on the web right now that we can certainly regard NodeJs as an instrumental part of bringing this site into deployed status.</p>
                      <p>NodeJS in a nutshell - [tough one, I&#39;ll have to come back to that later] sometimes you don&#39;t know what you think you know eh #smileyWink# </p>
                      <p>Okay, basically what they&#39;ve done there is brought javascript out of the browser and into the land of servers and PC&#39;s. Truly: They took Chrome&#39;s aptly-named V8 Engine, and turned it into something that you install on your PC - not exactly; but almost like a second Operating System that speaks Javascript. In essence therefore translating (AKA compiling) into C++ Native. </p>
                      <p>Yis I think this is so wrong, rather check out what better brains than mine have to say: </p>
                      <p>Okay, so who&#39;ve we left out; let me see...</p>
                      <p>[need tech quotes ticker] </p>

                    </div>
                  </v-card>

              </v-flex>

            </v-container>


          </v-layout>
          </v-container>
        </v-container>
      <!-- </div> -->
    </v-app>
  </div>
</template>

<script>
//TODO SOON fix minimum necessary
//import Foot from "./components/Foot";
import MainContent from "./components/Main";
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
    alertMessage: "Have you tried clicking and tapping around the screen?",
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
      if ((this.alert = true)) this.alert = false; // |this| properly refers to the person object
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
          this.showLogo = true;
          break;
        case 11:
          break;
        case 12:
          this.showComingSoon = false;
          break;
        case 13:
          this.showWatch = false;
          this.showSharing = false;
          break;
        case 14:
          break;
        case 15:
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

h1 {
  font-size: 250%;
}

h2 {
  font-size: 200%;
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
