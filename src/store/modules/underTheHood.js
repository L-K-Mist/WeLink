const state = {
  howDialogue: false,
};

const getters = {
  howDialogueState: state => {
    return state.howDialogue;
  },
};

const mutations = {
  setHowDialogue: (state, payload) => {
    state.howDialogue = payload;
  },
};


const actions = {
  // Dialogue actions
  openHowDialogue: ({
    commit
  }) => {
    commit('openHowDialogue');
  },
  setHowDialogue: ({
    commit
  }, payload) => {
    commit('setHowDialogue', payload);
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}