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
  setHowDialogue: (state, payload) => {
    state.howDialogue = payload;
  },
};

// const mutations = {
//   setAlert: (state, payload) => {
//     state.showAlert = payload;
//   }
// };
// const actions = {
//   setHowDialogue: ({
//     commit
//   }, payload) => {
//     commit('setHowDialogue', payload);
//   },
// }


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
