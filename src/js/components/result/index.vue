<template>
    <div class="resultwrap">
        <div v-show="snapshowviewShow" class="snapshowview" id="snapshowview">
            <div class="uploadimage-wrap" :style="'background-image:url('+userinfo.img+');background-size:contain;background-position:center center;background-repeat:no-repeat;background-color:#2169ab;'"></div>
            <img class="uploadimage-mask" src="./images/img_mask.png" />
            <div class="snapshowview-title">1号主管数据分析</div>
            <div class="snapshowview-percent">{{userinfo.data.zhuguanzhi.replace('%','')}}<span>%</span></div>
            <div class="snapshowview-subtitle">1号主管值</div>
            <div class="snapshowview-v1 pv">学习能力 {{userinfo.data.xuexinengli}}</div>
            <div class="snapshowview-v2 pv">沟通能力 {{userinfo.data.goutongnengli}}</div>
            <div class="snapshowview-v3 pv">自信心 {{userinfo.data.zixinxin}}</div>
            <div class="snapshowview-v4 pv">技能 {{userinfo.data.jineng}}</div>
            <div class="snapshowview-v5 pv">执行力 {{userinfo.data.zhixingli}}</div>
            <div class="snapshowview-v6 pv">意志力 {{userinfo.data.yizhili}}</div>
            <div class="snapshowview-v7 pv">创新 {{userinfo.data.chuangxin}}</div>
            <div class="snapshowview-note">{{userinfo.sentence}}</div>
            <div class="snapshowview-qrcode js-qrdraw"></div>
            <div class="snapshowview-remind">扫描二维码了解详细，帮我点赞</div>
            
        </div>
        <img v-show="!snapshowviewShow" class="resultimg" :src="resultImgSrc" />
        <div class="takesnap-bt">长按保存我的数据</div>
    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import qrcode from '../../public/lib/arale-qrcode.js';
// import util from '../../public/lib/util.js';

export default {
    created() {

    },
    data() {
        return {
            resultImgSrc: null,
            snapshowviewShow: true,
        };
    },
    computed: {
        ...mapGetters({
            dataurl: 'dataurl',
            userinfo: 'userinfo',
        }),
    },
    components: {
    },
    methods: {
        takeScreenshot() {
            const self = this;
            console.log('takeScreenshot');
            html2canvas(document.getElementById('snapshowview'), { // eslint-disable-line
                useCORS: true,
                logging: true,
                foreignObjectRendering : true
            }).then((canvas) => {
                // document.body.appendChild(canvas);
                const dataUrl = canvas.toDataURL('image/jpeg', 1.0);
                console.log('dataUrl', dataUrl.substr(0, 100));
                self.resultImgSrc = dataUrl;
                self.snapshowviewShow = false;
            });
            // html2canvas(document.getElementById('snapshowview'),{
            //     useCORS : true,
            //     foreignObjectRendering : true
            // }).then(function(canvas){
            //     const dataUrl = canvas.toDataURL();
            //     // console.log('data uri', dataUrl);
            //     self.resultImgSrc = dataUrl;
            //     self.snapshowviewShow = false;
            // });
        },
        endCut(no) {
            console.log('endCut', no);
            let uri = null;
            let dpi = 180;
            if($('html').data('dpr') == 1){
                dpi = dpi / 2;
            }
            if($('html').data('dpr') == 3){
                dpi = dpi / 2 * 3;
            }

            if(!/test/.test(window.location.href)){
                uri = 'http://pingan.weixinlm.com/h5/wch/?no='+ no;
            } else {
                uri = 'http://test.weixinlm.com/h5/wch/?no=' + no;
            }
            const qrnode = new qrcode({
                render: 'svg',
                size: dpi,
                text: uri
            });
            $('.js-qrdraw').html(qrnode);
            let imgt =new Image();  
            imgt.onload = () => {
                console.log('imgt.onload');
                imgt.onload =null;  
                this.takeScreenshot();
            }
            imgt.src = this.userinfo.img; 
            console.log('imgt.src', this.userinfo.img);
            
        }
    },
    watch: {
        userinfo(val){
            console.log('result userinfo change', val);
            if(val.no) {
                this.endCut(val.no);
            }
        },
    },
    mounted() {
        console.log('result mounted', this.userinfo);
        if(/testresult/.test(window.location.href)) {
            this.endCut('00001');
        } else if (this.userinfo.no) {
            this.endCut(this.userinfo.no);
        } else {
            this.$router.push({ path: '/upload' });
        }
        // console.log('mounted result');
        // const coverImg = new Image();
        // coverImg.src = this.userinfo.img;
        // coverImg.onload = () => {
        //     this.takeScreenshot();
        // };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font_size : 108;

@function rem($pixels){
    @return $pixels / $font_size + rem;
}

.resultwrap{
    position: absolute;
    height: 100%;
    width: 100%;
    background: #232b3a url('./images/bg.jpg') no-repeat;
    background-size: 100% auto;
    overflow: hidden;
    .resultimg{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 8;
        object-fit: cover;
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        z-index: 9;
    }
    .uploadimage-wrap{
        position: absolute;
        width: rem(500);
        height: rem(500);
        left: 50%;
        transform: translateX(-49%);
        top: rem(460);
        overflow: hidden;
    }
    .uploadimage{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
    }
    .uploadimage-mask{
        position: absolute;
        left: 0;
        top: rem(255);
        width: rem(1080);
        height: rem(920);
    }
    .takesnap-bt{
        position: absolute;
        width: rem(590);
        height: rem(110);
        font-size: rem(48);
        color: #FFF;
        text-align: center;
        line-height: rem(110);
        border-radius: rem(40);
        background: #4295f3;
        left: 50%;
        transform: translateX(-50%);
        bottom: rem(350);
        z-index: 9;
        pointer-events: none;
    }
    .pv{
        position: absolute;
        font-size: rem(42);
        color: #FFF;
        text-shadow: 0 rem(5) #395d93, rem(5) 0#395d93, rem(-5) 0#395d93, 0 rem(-5)#395d93;
        font-weight: bold;
    }
    .snapshowview{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #232b3a url('./images/bg.jpg') no-repeat;
        background-size: 100% auto;
        pointer-events: none;
        &-note{
            position: absolute;
            width: rem(800);
            left: rem(35);
            top: rem(1500);
            font-size: rem(48);
            color: #FFF;
        }
        &-qrcode{
            position: absolute;
            right: rem(50);
            bottom: rem(50);
        }
        &-remind{
            position: absolute;
            font-size: rem(30);
            color: #FFF;
            left: rem(213);
            bottom: rem(80);
        }
        &-v1{
            top: rem(430);
            left: rem(72);
        }
        &-v2{
            top: rem(440);
            right: rem(32);
        }
        &-v3{
            top: rem(686);
            left: rem(27);
        }
        &-v4{
            top: rem(673);
            right: rem(43);
        }
        &-v5{
            top: rem(1026);
            left: rem(124);
        }
        &-v6{
            top: rem(994);
            right: rem(86);
        }
        &-v7{
            top: rem(1128);
            left: rem(450);
        }
        &-title{
            position: absolute;
            top: rem(145);
            left: 50%;
            transform: translateX(-50%);
            font-size: rem(48);
            color: #FFF;
            text-shadow: 0 rem(5) #395d93, rem(5) 0#395d93, rem(-5) 0#395d93, 0 rem(-5)#395d93;
            font-weight: bold;
        }
        &-subtitle{
            position: absolute;
            top: rem(370);
            left: 50%;
            transform: translateX(-50%);
            font-size: rem(36);
            color: #efa40c;
        }
        &-percent{
            position: absolute;
            top: rem(260);
            left: 50%;
            transform: translateX(-50%);
            font-size: rem(85);
            color: #efa40c;
            span{
                font-size: rem(53);
            }
        }
    }
}
</style>
