const state = {
  counter: 0
};

const getters = {
  clickCount: state => {
    return state.counter;
  }
};

const mutations = {
  incrementCounter: state => {
    state.counter ++;
  }
};

const actions = {
  incrementCounter: ({
    commit
  }) => {
      commit('incrementCounter');
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
