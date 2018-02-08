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
    state.counter++;
  },
  setCounter: (state, payload) => {
    state.counter = payload;
  },
};

const actions = {
  incrementCounter: ({
    commit
  }) => {
    commit('incrementCounter');
  },
  setCounter: ({
    commit
  }, payload) => {
    commit('setCounter', payload);
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}
