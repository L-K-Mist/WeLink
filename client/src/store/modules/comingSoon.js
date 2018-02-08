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
  setComingSoon: (state, payload) => {
    state.seeComingSoon = payload;
  },
  setWatchSpace: (state, payload) => {
    state.seeWatchSpace = payload;
  },
  setSharingHow: (state, payload) => {
    state.seeSharingHow = payload;
  },


};

const actions = {
  // Dialogue actions
  setComingSoon: ({
    commit
  }, payload) => {
    commit('setComingSoon', payload);
  },
  setWatchSpace: ({
    commit
  }, payload) => {
    commit('setWatchSpace', payload);
  },
  setSharingHow: ({
    commit
  }, payload) => {
    commit('setSharingHow', payload);
  },

};

export default {
  state,
  mutations,
  actions,
  getters
}
