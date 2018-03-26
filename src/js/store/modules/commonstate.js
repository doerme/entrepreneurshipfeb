/* eslint-disable */
import * as types from '../mutation-types';
import util from '../../public/lib/util.js';

const apiurl = /test/.test(window.location.href) ? '//test.weixinlm.com/' : '//pingan.weixinlm.com/';
// initial state
const state = {
    usersex: 1,
    dataurl: null,
    imgurl: null,
    toastmsg: null,
    myinfo: {
        name: null,
        no: null,
        mobile: null,
        sentence: null,
    },
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
    configdata: null,
};

// getters
const getters = {
    imgurl: stateData => stateData.imgurl,
    toastmsg: stateData => stateData.toastmsg,
    usersex: stateData => stateData.usersex,
    dataurl: stateData => stateData.dataurl,
    userinfo: stateData => stateData.userinfo,
    rankList: stateData => stateData.rankList,
    myinfo: stateData => stateData.myinfo,
    configdata: stateData => stateData.configdata,
};

// actions
const actions = {
    setConfig({ commit }){
        $.ajax({
            url: `${apiurl}addons/api/Millionbusinessforum/share_config`,
            dataType: 'JSONP',
        }).then((jdata)=>{
            console.log('share_config', jdata);
            commit(types.setConfig, jdata)
        });
    },
    setMyInfo({ commit }){
        $.ajax({
            url: `${apiurl}addons/api/Millionbusinessforum/get_local_info`,
            dataType: 'JSONP',
        }).then((jdata)=>{
            console.log('get_local_info', jdata);
            commit(types.setMyInfo, jdata.data)
        });
    },
    setLikeNum({ commit }, acdata){
        $.ajax({
            url: `${apiurl}addons/api/Millionbusinessforum/like`,
            dataType: 'JSONP',
            data: {
                no: acdata
            }
        }).then((jdata)=>{
            if (jdata.err === 1) {
                console.log(jdata.errmsg);
                commit(types.setToastMsg, jdata.errmsg);
            } else {
                console.log('addlike');
                commit(types.setUserInfo, 'addlike');
            }
        })
    },
    setUserSex({ commit }, acdata) {
        commit(types.setUserSex, acdata);
    },
    setDataUrl({ commit }, acdata) {
        $.ajax({
            url: `${apiurl}addons/api/Millionbusinessforum/create_user`,
            dataType: 'JSONP',
            data: acdata,
        }).then((jdata)=>{
            if (jdata.err === 1) {
                console.log(jdata.errmsg);
                commit(types.setToastMsg, jdata.errmsg);
            } else {
                commit(types.setDataUrl, acdata.localId);
                commit(types.setUserInfo, jdata.data);
            }
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
    [types.setConfig](stateData, acdata) {
        const stateNew = stateData;
        stateNew.configdata = acdata;
    },
    [types.setToastMsg](stateData, acdata) {
        const stateNew = stateData;
        stateNew.toastmsg = acdata;
    },
    [types.setUserSex](stateData, acdata) {
        const stateNew = stateData;
        stateNew.usersex = acdata;
    },
    [types.setDataUrl](stateData, acdata) {
        const stateNew = stateData;
        stateNew.dataurl = acdata;
    },
    [types.setImgUrl](stateData, acdata) {
        const stateNew = stateData;
        stateNew.imgurl = acdata;
    },
    [types.setMyInfo](stateData, acdata) {
        const stateNew = stateData;
        stateNew.myinfo = acdata;
    },
    [types.setUserInfo](stateData, acdata) {
        const stateNew = stateData;
        console.log('types.setUserInfo', acdata, stateNew.userinfo.zan);
        if(acdata === 'addlike') {
            console.log('1');
            stateNew.userinfo.zan = (stateNew.userinfo.zan + 1);
        } else {
            stateNew.userinfo = acdata;
        }
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
