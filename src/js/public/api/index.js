/* eslint-disable */
import ajaxApi from '../lib/zhangxiangApi.js';
// 服务器接口域名
const serverDomin = '';
// appid
// const appid = "";

export default {
    // 获取底栏配置文案
    ajaxFun(requestUrl, pdata){
        return ajaxApi.jsonp(requestUrl, pdata);
    },
};
