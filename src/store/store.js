import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import thankTee from './modules/thankTee';
import comingSoon from './modules/comingSoon';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //dialogue: false,
    //teeDialogue: false,

  },
  getters: {
    //getDialogueBool: state => state.dialogue,
  },
  modules: {
    counter,
    thankTee,
    comingSoon
  }

});
