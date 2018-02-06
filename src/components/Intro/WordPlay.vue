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
    <div class="align-center justify center app-front mb-0 pb-0" style="
      color: white;
      text-shadow: 2px 2px 4px #000000;
      font: 30px Teko, sans-serif;
      position: absolute;
      margin: auto;
      top: 20%;
      z-index: 8
      ">
      <transition appear
            enter-active-class="animated zoomInDown"
            leave-active-class="animated bounceOutRight" v-if="showComingSoon">
        <div style="top: 2px">
          <h1 @click="showComingSoon = false" style="cursor: pointer" >
            WeLink 2.0 Coming Soon...
          </h1>
        </div>
      </transition>
      <transition appear
                enter-active-class="animated zoomInUp"
                leave-active-class="animated bounceOutRight">
        <div style="position: relative; top: 2px"
              v-if="showWatchSpace">
          <h2 @click="showWatchSpace = false" class="text-xs-center" style="cursor: pointer" >
            Watch This Space!
          </h2>
        </div>
      </transition>
      <transition appear
              enter-active-class="animated zoomInUp"
              leave-active-class="animated bounceOutRight">
        <div  v-if="showSharingHow">
          <h3 @click="showSharingHow = false" style="cursor: pointer" >
            <i>We'll be sharing how we did it as we do it.</i>
          </h3>
        </div>
      </transition>
      <transition appear
              enter-active-class="animated zoomInUp"
              leave-active-class="animated bounceOutRight">
        <div name="last-word" v-if="showSharingHow">
          <h3 @click="showSharingHow = false" style="cursor: pointer" >
            <i>So enjoy the clicks, I'll be back soon</i>
          </h3>
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
  background-image: url("../../assets/starrysky.jpg");
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