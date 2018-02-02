const state = {
  seeComingSoon: false,
  seeWatchSpace: false,
  seeSharingHow: false,
};

const getters = {
  seeComingSoon: state => {
    return state.seeComingSoon;
  },
  seeWatchSpace: state => {
    return state.seeWatchSpace;
  },
  seeSharingHow: state => {
    return state.seeSharingHow;
  },
};

const mutations = {
  // For opening the dialogue with thanksTee content
  seeComingSoon: (state, payload) => {
    state.seeComingSoon = payload;
  },
  // seeWatchSpace: state => {
  //     state.teeDialogue = !state.teeDialogue;
  // },
  // // For revealing the BUTTON that activates the thanksTee dialogue
  // revealLoveFab: state => {
  //     state.seeLoveFab = true;
  // },
  // toggleLoveFab: state => { // Dee might not use
  //     state.seeLoveFab = !state.seeLoveFab;
  // },

};

const actions = {
  // Dialogue actions
  seeComingSoon: ({
    commit
  }, payload) => {
    commit('seeComingSoon', payload);
  },

};

export default {
  state,
  mutations,
  actions,
  getters
}
