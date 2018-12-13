<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="wrap-banner">
      <transition
              appear
              enter-active-class="animated fadeInDownBig"
              leave-active-class="animated bounce">
        <div class="main-title">
          <h2>
            WeLink 2.0 Coming Soon...
          </h2>
          <p class="subtitle">
            Watch This Space!
          </p>

            <p class="subtitle">
              <i>We'll be sharing how we did it as we do it.</i>
            </p>
        </div>
        <!-- <transition appear
              enter-active-class="animated fadeInDownBig"
              leave-active-class="animated bounce">
        </transition> -->

      </transition>
      <div class="logo-welink">
        <img :src="logoImage" alt="no image">
      </div>
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
      >
      </vue-particles>
    </div>
    <!-- <youtube-frame></youtube-frame> -->
    <!-- <main-content></main-content> -->
    <!-- <foot></foot> -->
  </div>
</template>

<script>
import YoutubeFrame from "@/components/YoutubeClip";
import WeLinkLogo from "./assets/welink-logo-pwa.png";
import HeroHow from "@/components/HeroHow";
export default {
  data: function() {
    return {
      logoImage: WeLinkLogo
    };
  },
  components: {
    YoutubeFrame,
    HeroHow
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
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

code[class*="language-"],
pre[class*="language-"],
pre,
code {
  font-family: Menlo, Monaco, Andale Mono, Ubuntu Mono, monospace !important;
  font-size: 0.95em;
}
@media (max-width: 767px) {
  code[class*="language-"],
  pre[class*="language-"],
  pre,
  code {
    font-size: 0.85em;
  }
}

pre.language-js,
pre.language-html {
  max-width: 650px;
  margin: 1rem auto !important;
  background: #292929;
  border-radius: 3px;
  box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
}

.npm-code {
  background: #292929;
  border-radius: 3px;
  box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

h3 {
  font-weight: 100;
  font-size: 2rem;
}

.white {
  color: #ffffff;
}

.teko {
  font-family: "Teko", sans-serif;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

#particles-js {
  background-image: url(../assets/starrysky.jpg?1512123088);
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.logo-welink {
  opacity: 0.5;
  position: absolute;
  z-index: 999;
  top: 20%;
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

.main-section {
  max-width: 650px;
  margin: auto;
  padding: 0 1rem;
}

.main-title {
  color: #fff;
  z-index: 999;
}
.main-title h2 {
  font-size: 7rem;
  font-family: "Teko", sans-serif;
  text-shadow: 8px 8px #000000;
  text-transform: uppercase;
  margin: 0;
}
@media (max-width: 767px) {
  .main-title h2 {
    font-size: 3rem;
  }
}
.main-title p.subtitle {
  font-size: 1.7rem;
  margin: 0;
  text-shadow: 4px 4px #000000;
}
@media (max-width: 767px) {
  .main-title p.subtitle {
    font-size: 1rem;
  }
}

.section-title {
  margin: 2rem 0 0 0;
}

.footer {
  margin: 1rem 0;
}
</style>

