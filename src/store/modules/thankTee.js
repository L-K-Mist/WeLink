const state = {
  teeDialogue: false,
  seeLoveFab: false,
};

const getters = {
  teeDialogueState: state => {
    return state.teeDialogue;
  },
  seeLoveFab: state => {
    return state.seeLoveFab;
  },
};

const mutations = {
  // For opening the dialogue with thanksTee content
  openTeeDialogue: state => {
    state.teeDialogue = true;
  },
  setTeeDialogue: (state, payload) => {
    state.teeDialogue = payload;
  },
  // For revealing the BUTTON that activates the thanksTee dialogue
  revealLoveFab: state => {
    state.seeLoveFab = true;
  },
  toggleLoveFab: state => { // Dee might not use
    state.seeLoveFab = !state.seeLoveFab;
  },

};

const actions = {
  // Dialogue actions
  openTeeDialogue: ({
    commit
  }) => {
    commit('openTeeDialogue');
  },
  setTeeDialogue: ({
    commit
  }, payload) => {
    commit('setTeeDialogue', payload);
  },
  // Fab actions
  revealLoveFab: ({
    commit
  }) => {
    commit('revealLoveFab');
  },
  toggleLoveFab: ({
    commit
  }) => {
    commit('toggleLoveFab')
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}