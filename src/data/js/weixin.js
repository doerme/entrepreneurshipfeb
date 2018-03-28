/* eslint-disable */
var SiteUrl = /test/.test(window.location.href) ? '//test.weixinlm.com/' : '//pingan.weixinlm.com/';
var ApiUrl = SiteUrl+'addons/api/';
var _localurl = window.location.href.split('#')[0];
var localUrl = encodeURIComponent(_localurl);
wxShareConf.link = _localurl;
document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
function subSomething()
{
    if(document.readyState == "complete"){ //当页面加载状态为完全结束时进入
        // $(".loading").hide();
    }
}

function initWxConf(){
    $.ajax({
        url:ApiUrl+'weixin/getWxConf',
        data:{'url':localUrl,'initUser':initUser},
        dataType:"jsonp",
        jsonpCallback:"initBack"
    });
}

function initBack(d){
    if(d.redirect){
        location.href = d.redirect;
    }
    wx.config(eval('(' + d.wxconf + ')'));
    wx.ready(function () {
        wx.onMenuShareAppMessage(wxShareConf);
        wx.onMenuShareTimeline(wxShareConf);
    });
}



 //拍照或从手机相册中选图接口
 /*
    调用该方法前请先定义返回方法wxImageBack(localIds);
 */
function wxChooseImage() {
    wx.chooseImage({
        count: 1,
        needResult: 1,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (data) {
            console.log('wxChooseImage success', data);
            afterwxChooseImage();
            localIds = data.localIds[0].toString(); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            if (localIds) {
                wxUploadImage(localIds);
            }
        },
        fail: function (res) {
            console.log(res);
            // alterShowMessage("操作提示", JSON.stringify(res), "1", "确定", "", "", "");
        }
    });
}

function wxUploadImage(e) {
    
    wx.uploadImage({
        localId: e, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
            console.log('wxUploadImage success', res);
            afterwxUploadImage(res.localId, res.serverId);
        },
        fail: function (error) {
            picPath = '';
            localIds = '';
            alert(Json.stringify(error));
        }
    });
}

function wxDownloadImage(serverId,imgid) {
    wx.downloadImage({  
        serverId: serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得  
        isShowProgressTips: 1, // 默认为1，显示进度提示  
        success: function (res) {  
            var localId = res.localId; // 返回图片下载后的本地ID  
            $('#'+imgid).attr('src',localId);  
        }  
    }); 
}


function checkPinganId(s){
  var regu =/^[0-9]{10}$/;
  var re = new RegExp(regu);
  if (re.test(s)) {
  return true;
  }else{
  return false;
  }
}


/*手机验证*/
function checkMobile(s){
  var regu =/^[1][3-9][0-9]{9}$/;
  var re = new RegExp(regu);
  if (re.test(s)) {
  return true;
  }else{
  return false;
  }
}

/** 获取地理位置 */
function wxGetLocation() {
    console.log('wxGetLocation');
    wx.getLocation({
        success: function (res) {
            console.log('wxGetLocation success', res);
            afterWxGetLocation(res);
            // var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            // var longitude = res.longitude ; // 经度，浮点数，范围为180 ~ -180。
            // var speed = res.speed; // 速度，以米/每秒计
            // var accuracy = res.accuracy; // 位置精度
        },
        cancel: function (res) {
            console.log('wxGetLocation cancel', res);
        }
    });
}
