import nlp from 'compromise'

nlp.plugin({
    patterns: {
        '/R[0-9]+/': 'Money',
        '(of|worth of|worth)': 'FinItemPhrase',
    },
    words: {
        'blessing': 'Supplier',
        'usual guys': 'Supplier',
        'bluff checkers': 'Supplier',
        'china mall': 'Supplier',
        'mike': 'Supplier'
    }
});

const state = {
    openActivityLog: false,
    rawLog: null,
    finItems: [{
        value: false,
        number: 0,
        provider: "unknown",
        item: "unknown"
    }],
    finSentences: [],
    gotFin: false,
};

const getters = {
    openActivityLog: state => {
        return state.openActivityLog;
    },
    rawLog(state) {
      return state.rawLog;
    },
    finSentences(state) {
      return state.financialSentences;
    },
    gotFin(state) {
      return state.gotFin;
    },
    finItems(state) {
      return state.finItems;
    }
};

const mutations = {
    openActivityLog: (state, payload) => {
        state.openActivityLog = payload;
    },
    rawLog(state, payload) {
      // mutate state
      state.rawLog = payload
    },
    finSentences(state, payload) {
      // mutate state
      state.finSentences = payload
      //console.log('mutated finSentences to ', state.financialData.sentences)
    },
    gotFin(state, payload) {
      // mutate state
      console.log('gotFin was: ', state.gotFin)
      state.gotFin = payload
      console.log('gotFin is now: ', state.gotFin)
    },
    finItems(state, payload) {
      state.finItems = payload
    },
};

const actions = {
    // Dialogue actions
    openActivityLog: ({
        commit
    }, payload) => {
        commit('openActivityLog', payload);
    },
    newRawLog({
      commit,
      dispatch
    }, payload) {
      commit('rawLog', payload)
      dispatch('finSentences', payload)
    },
    finSentences({
      commit,
      dispatch
    }, payload) {
      var financialSentences = nlp(payload).sentences().if('#Money')
      commit('finSentences', financialSentences.out('array'))
      dispatch('finData', financialSentences)
    },

    finData({
      commit,
      dispatch
    }, payload) {
      // commit('finSentences', )
      var val;
      var items = [];
      for (val of payload.out('array')) {
        console.log(val);
        let item = {};
        let numberText = nlp(val).match('#Money').out('text').replace('r', '')
        item.number = parseInt(numberText, 10)
        item.provider = nlp(val).match('#Supplier').toTitleCase().out()
        let lessItemPhrase = nlp(val).delete('#FinItemPhrase')
        let lessSupplier = nlp(val).delete('#Supplier')
        let lessMoney = lessSupplier.delete('#Money').delete('#FinItemPhrase').delete('#Preposition')
        item.value = false // something Vuetify Tabular Data needs
        item.item = nlp(val).delete('#Supplier').delete('#Money').delete('#FinItemPhrase').delete('#Preposition').match('#Noun').toTitleCase().out()
        items.push(item)
      }
      commit('finItems', items)
      console.log(items)
      commit('gotFin', true)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}