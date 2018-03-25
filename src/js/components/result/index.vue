<template>
    <div class="resultwrap">
        <div v-show="snapshowviewShow" class="snapshowview" id="snapshowview">
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
            <img class="snapshowview-qrcode" src="./images/qrcode.png" />
            <div class="snapshowview-remind">扫描二维码了解详细，帮我点赞</div>
            <img class="uploadimage" :src="userinfo.img" />
        </div>
        <img v-show="true" class="resultimg" :src="resultImgSrc" />
        <div class="takesnap-bt">长按保存我的数据</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
            }).then((canvas) => {
                document.body.appendChild(canvas);
                self.resultImgSrc = canvas.toDataURL();
                self.snapshowviewShow = false;
            });
        },
    },
    watch: {
    },
    mounted() {
        this.takeScreenshot();
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
        object-fit: contain;
    }
    .uploadimage{
        position: absolute;
        width: rem(470);
        height: rem(470);
        left: 50%;
        transform: translateX(-49%);
        top: rem(482);
        border-radius: 50%;
    }
    .takesnap-bt{
        position: absolute;
        z-index: 8;
        left: 50%;
        transform: translateX(-50%);
        width: rem(430);
        height: rem(105);
        text-align: center;
        line-height: rem(105);
        font-size: rem(36);
        color: #FFF;
        background: #5574ff;
        border-radius: rem(40);
        top: rem(1385);
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
            width: rem(160);
            height: rem(160);
            right: rem(35);
            top: rem(1504);
        }
        &-remind{
            position: absolute;
            font-size: rem(12);
            color: #FFF;
            right: rem(35);
            top: rem(1690);
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
