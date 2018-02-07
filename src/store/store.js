import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import thankTee from './modules/thankTee';
import underTheHood from './modules/underTheHood'
import comingSoon from './modules/comingSoon';
import infoAlert from './modules/infoAlert'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    seeLogo: false,
  },
  getters: {
    seeLogoState: state => {
      return state.seeLogo;
    }
    //getDialogueBool: state => state.dialogue,
  },
  mutations: {
    setLogo: (state, payload) => {
      state.seeLogo = payload;
    }
  },
  actions: {
    setLogo: ({
      commit
    }, payload) => {
      commit('setLogo', payload);
    }

  },
  modules: {
    counter,
    thankTee,
    comingSoon,
    infoAlert,
    underTheHood
  }

});
