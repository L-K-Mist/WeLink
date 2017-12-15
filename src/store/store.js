import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dialogue: false,
    teeDialogue: false,
    counter: 0, // for later
    seeLoveFab: false,
  },
  getters: {
    getDialogueBool: state => state.dialogue,
  },

});
