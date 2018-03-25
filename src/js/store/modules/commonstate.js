import * as types from '../mutation-types';

// initial state
const state = {
    usersex: 1,
    dataurl: null,
};

// getters
const getters = {
    usersex: stateData => stateData.usersex,
    dataurl: stateData => stateData.dataurl,
};

// actions
const actions = {
    setUserSex({ commit }, acdata) {
        commit(types.setUserSex, acdata);
    },
    setDataUrl({ commit }, acdata) {
        commit(types.setDataUrl, acdata);
    },
};

// mutations
const mutations = {
    [types.setUserSex](stateData, acdata) {
        const stateNew = stateData;
        stateNew.usersex = acdata;
    },
    [types.setDataUrl](stateData, acdata) {
        const stateNew = stateData;
        stateNew.dataurl = acdata;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
