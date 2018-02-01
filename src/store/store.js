import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import thankTee from './modules/thankTee';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dialogue: false,
    teeDialogue: false,
    seeLoveFab: false,
  },
  getters: {
    getDialogueBool: state => state.dialogue,
  },
  modules: {
    counter,
    thankTee
  }

});
