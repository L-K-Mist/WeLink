const state = {
  showAlert: false
};

const getters = {
  showAlert: state => {
    return state.showAlert;
  }
};

const mutations = {
  setAlert: (state, payload) => {
    state.showAlert = payload;
  }
};

const actions = {
  setAlert: ({
    commit
  }, payload) => {
    commit('setAlert', payload);
  },
}
