import * as types from '../mutation-types';

// initial state
const state = {
    littleRecordShow: 'notready',
};

// getters
const getters = {
    littleRecordShow: stateData => stateData.littleRecordShow,
};

// actions
const actions = {
    setLittleRecordShow({ commit }, { isShow }) {
        commit(types.setLittleRecordShow, isShow);
    },
};

// mutations
const mutations = {
    [types.setLittleRecordShow](stateData, isShow) {
        const stateNew = stateData;
        stateNew.littleRecordShow = isShow;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
