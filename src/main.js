// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueParticles from 'vue-particles'
import Vuetify from 'vuetify'
import { store } from './store/store'
import { Picker, Emoji } from 'emoji-mart-vue'
import 'vuetify/dist/vuetify.css'
import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.use(VueParticles)// that's the plugin with that kiff background!

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App,
    emoji: Emoji,
    picker: Picker,
  },
})
