<template> 
  <v-container>
    <div v-if="counter > 10" style="position: absolute; left: 1%; z-index: 8"
        transition="slide-x-transition">
      <v-layout column>
        <v-switch light
          v-model="showComingSoon">
        </v-switch>
        <v-switch light
          v-model="showWatchSpace">
        </v-switch>
        <v-switch light
          v-model="showSharingHow">
        </v-switch>        
      </v-layout>
    </div>
    <v-layout>
    <div class="text-xs-center impact-text mb-0 pb-0" style="
      
      position: absolute;
      margin: auto;
      top: 20%;
      z-index: 8
      ">
      <transition appear
            enter-active-class="animated zoomInDown"
            leave-active-class="animated bounceOutRight" v-if="showComingSoon">
        <div class="impact-text" style="top: -10px">
          <h1 @click="showComingSoon = false" style="cursor: pointer" >
            WeLink 2.0 Coming Soon...
          </h1>
        </div>
      </transition>
      <transition appear
                enter-active-class="animated zoomInUp"
                leave-active-class="animated bounceOutRight">
        <div class="impact-text" style="top: 15vw"
              v-if="showWatchSpace">
          <h2 @click="showWatchSpace = false" class="text-xs-center" style="cursor: pointer" >
            Watch This Space!
          </h2>
        </div>
      </transition>
      <transition appear
              enter-active-class="animated zoomInUp"
              leave-active-class="animated bounceOutRight">
        <div class="impact-text" style="top: 50vw" v-if="showSharingHow">
          <h3 @click="showSharingHow = false" style="cursor: pointer" >
            <i>We'll be sharing how we did it as we do it.</i>
          </h3>
        </div>
      </transition>
      <transition appear
              enter-active-class="animated zoomInUp"
              leave-active-class="animated bounceOutRight">
        <div class="impact-text" style="top: 60vw" v-if="showSharingHow">
          <p @click="showSharingHow = false" style="cursor: pointer" >
            <i>So enjoy the clicks, I'll be back soon</i>
          </p>
        </div>
      </transition>
    </div>   
    </v-layout>
  </v-container>
</template> 

<script>
export default {
  computed: {
    counter: function() {
      return this.$store.getters.clickCount;
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
    }
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
.impact-text {
  position: absolute;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  font: 5vw Teko, sans-serif;

  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%; /* Need a specific value to work */
}

h1 {
  font-size: 250%;
}

h2 {
  font-size: 150%;
}

p {
  font-size: 100%;
}

/* #app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.app-front {
  z-index: 1;
  display: inline-block;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  padding: 0;
  margin: 0;
}

#particles-js {
  background-image: url("../../assets/starrysky.jpg");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>