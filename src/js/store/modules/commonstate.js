/* eslint-disable */
import * as types from '../mutation-types';
import util from '../../public/lib/util.js';

const apiurl = 'http://test.weixinlm.com/';
// initial state
const state = {
    usersex: 1,
    dataurl: null,
    userinfo: {
        id: null,
        openid: null,
        mobile: null,
        img: null,
        no: null,
        name: null,
        zan: null,
        create_time: null,
        data: {
            xuexinengli: null,
            zixinxin: null,
            zhixingli: null,
            chuangxin: null,
            yizhili: null,
            jineng: null,
            goutongnengli: null,
        },
    },
    rankList: [],
};

// getters
const getters = {
    usersex: stateData => stateData.usersex,
    dataurl: stateData => stateData.dataurl,
    userinfo: stateData => stateData.userinfo,
    rankList: stateData => stateData.rankList,
};

// actions
const actions = {
    setUserSex({ commit }, acdata) {
        commit(types.setUserSex, acdata);
    },
    setDataUrl({ commit }, acdata) {
        $.ajax({
            url: `${apiurl}addons/api/Millionbusinessforum/create_user`,
            dataType: 'JSONP',
            data: acdata,
        }).then((jdata)=>{
            commit(types.setDataUrl, acdata.localId);
        });
        
    },
    setUserInfo({ commit }) {
        $.ajax({
            url: `${apiurl}addons/api/Millionbusinessforum/get_user_info`,
            dataType: 'JSONP',
            data: {
                no: util.getURLParam('no')
            }
        }).then((jdata)=>{
            console.log(jdata);
            commit(types.setUserInfo, jdata.data);
        })
        
    },
    setRankList({ commit }) {
        $.ajax({
            url: `${apiurl}addons/api/Millionbusinessforum/like_rank`,
            dataType: 'JSONP'
        }).then((jdata)=>{
            console.log(jdata);
            commit(types.setRankList, jdata.data);
        })
        
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
    [types.setUserInfo](stateData, acdata) {
        const stateNew = stateData;
        stateNew.userinfo = acdata;
    },
    [types.setRankList](stateData, acdata) {
        const stateNew = stateData;
        stateNew.rankList = acdata;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
