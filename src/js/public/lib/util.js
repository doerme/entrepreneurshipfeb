/* eslint-disable */
var yyalert = require('./yyalert');
module.exports = {
    apiHost: /test/.test(window.location.href) ? 'https://api-gateway-test.yy.com' : 'https://api-gateway.yy.com',
    commonTips: function(strnotice, livetime, successCB) {
        yyalert.confirm('', {
            title: '提示',
            content: '<div class="alert-tips-wrap">'+ strnotice +'</div>',
            hasX: true,
            fixed: true,
            liveTime: livetime || 0,
            buttons: [
                {
                    id: 'makesurebind',
                    value: '确定',
                    style: 'success',
                    callback: function(){
                        successCB && successCB();
                        this.removeSelf();
                    }
                },{
                    id: 'cancel',
                    value: '取消',
                    style: 'cancel'
                }],
            customClass: 'tips-alert'
        });
    },
    equalObject: function(obj1, obj2, deepCheck) {
        if (obj1 === obj2) {
            return true;
        };
        // 属性总数不等，直接返回false
        var size1 = 0;
        for (var key in obj1){
            size1++;
        }
        var size2 = 0;
        for (var key in obj2){
            size2++;
        }
        if (size1 !== size2) {
            return false;
        };
        
        if (!deepCheck) { // 浅度判断
            for (var key in obj1){
                if (obj1[key] !== obj2[key]) {
                    return false;
                };
            }
            return true;
        };
        var type1,type2;
        for (var key in obj1){
            type1 = type(obj1[key]);
            type2 = type(obj2[key]);
            if (type1 !== type2) {
                return false;
            };
            if (type1 === "Object") {
                if (!equalObject(obj1[key], obj2[key], true)) {
                    return false;
                };
            }else if (type1 === "Array") {
                if (!equalArray(obj1[key], obj2[key],true)) {
                    return false;
                };
            }else if (obj1[key] !== obj2[key]) {
                return false;
            };
        }
        return true;
    },
    numPad: function (num, n) {
    // console.log('numPad', num, n);
        var len = num.toString().length;
        while (len < n) {
            num = '0' + num;
            len++;
        }
        return num;
    },
    numberFormat: function(value){
        if(value === 0) return 0;
        if (!value) return null;
        if (Number.isNaN(parseFloat(value))) {
            return value;
        }
        if (parseInt(value, 10) === value) {
            return value;
        }
        console.log('before tofixed', value);
        return value.toFixed(2);
    },
    moneyFormat: function(rewardamount, isshowinit){
        if(isshowinit){
            return Math.floor(rewardamount/100);
        }else{
            return Math.floor(rewardamount/100) + '.' + this.numPad(rewardamount%100, 2);
        }
    },
    getURLParam: function(name, url) {
        var re = new RegExp("[\\?&#]" + name + "=([^&#]+)", "gi");
        var ma = (url || location.href).match(re);
        var strArr;
        if (ma && ma.length > 0) {
            strArr = (ma[ma.length - 1]);
            var _index = strArr.indexOf("=");
            return strArr.substring(_index + 1);
        }
        return '';
    },
    todatestr: function (nowtime, dealtime) {
        var rsArr = ['今天', '明天', '后天', '大后天'];
        var curdate = new Date(nowtime).getDate();
        var dealdate = new Date(dealtime).getDate();
        if (rsArr[dealdate - curdate]) {
            return rsArr[dealdate - curdate];
        }
        return Math.abs(dealdate - curdate) + '日后';
    },
    formatDate: function (dat, format) {
        var date = new Date(+dat);
        var obj = {
            yyyy: date.getFullYear(),
            yy: date.getFullYear().toString().slice(-2),
            M: this.numPad(date.getMonth() + 1, 2),
            MM: '0' + ((date.getMonth() + '1').slice(-2)),
            d: this.numPad(date.getDate(), 2),
            dd: '0' + ((date.getDate() + '').slice(-2))
        };
        return format.replace(/([a-z]+)/ig, function ($1) { return obj[$1]; });
    },
    getDateSegment: function (sDate, eDate) {
        var result = [];
        var begin = new Date(sDate.replace(/-/g, '/')).valueOf();
        var end = new Date(eDate.replace(/-/g, '/')).valueOf();
        var i = begin;
        for (i; i <= end; i += (24 * 3600000)) {
            result.push(this.formatDate(i, 'yyyy-M-d'));
        }
        return result;
    },
    setCookie: function (c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString());
    },
    getCookie: function (c_name) {
        var c_start = null,
            c_end = null;
        try {
            if (document.cookie && document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + '=');
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(';', c_start);
                    if (c_end == -1) c_end = document.cookie.length;
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return '';
        } catch (e) {
            console.error('getCookie e', e);
            return '';
        }
    },
    clientLog: function(content, type){
        console.log('yy.log.print', content, type);
        YYApi.reqYYData('yy.log.print' , {log:content , type:type || 'common'});
    },
    hiidoReport: function(param) {
        var hevent = new hiidoEvent('yytalk','20023509');
        hevent.setSys(3);
        hevent.setActtype(param.acttype);
        hevent.setUid(param.uid);	//上报 uid 的接口，uid 用户标识，不调用则默认取 cookie:yyuid
        hevent.reportJudge();
    },
    forbidden2Max: function() {
        var valObj = new Object(); 
        valObj.args= "{\"style\":2 }";
        valObj.fun="removeStyle";
        var retObj = window.dataRequest({
            command: "yy.inner.cefwindowscall",
            parameters: valObj
        });
    }
};
