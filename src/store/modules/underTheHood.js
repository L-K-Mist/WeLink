const state = {
  howDialogue: false,
};

const getters = {
  howDialogueState: state => {
    return state.howDialogue;
  },
};

const mutations = {
  // For opening the dialogue with thanksTee content
  openHowDialogue: state => {
    state.howDialogue = true;
  },
  toggleHowDialogue: state => {
    state.howDialogue = !state.howDialogue;
  },
};

const actions = {
  // Dialogue actions
  openHowDialogue: ({
    commit
  }) => {
    commit('openHowDialogue');
  },
  toggleHowDialogue: ({
    commit
  }) => {
    commit('toggleHowDialogue')
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}
