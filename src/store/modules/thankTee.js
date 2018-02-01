const state = {
  teeDialogue: false,
};

const getters = {
  teeDialogueState: state => {
    return state.teeDialogue;
  }
};

const mutations = {
  openTeeDialogue: state => {
    state.teeDialogue = true;
  },
  toggleTeeDialogue: state => {
    state.teeDialogue = !state.teeDialogue;
  }
};

const actions = {
  openTeeDialogue: ({
    commit
  }) => {
    commit('openTeeDialogue');
  },
  toggleTeeDialogue: ({
    commit
  }) => {
    commit('toggleTeeDialogue')
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
