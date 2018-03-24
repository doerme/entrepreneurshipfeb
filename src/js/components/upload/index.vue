<template>
    <div class="uploadwrap">
        <div class="uploadwrap-leftline">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="uploadwrap-rightline">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="uploadwrap-decoration">
            <img class="uploadwrap-decoration-q1 quan" src="./images/quan1.png" />
            <img class="uploadwrap-decoration-q2 quan" src="./images/quan2.png" />
            <img class="uploadwrap-decoration-q3 quan" src="./images/quan3.png" />
            <img class="uploadwrap-decoration-q4 quan" src="./images/quan4.png" />
        </div>
        <div class="uploadwrap-title">1号主管分析</div>
        <div class="uploadwrap-subtitle">1号主管分析 比你更懂你</div>
        <div @click.stop="formshow=true" class="uploadwrap-bt">1号主管分析</div>
        <transition-group name="fade" mode="out-in">
            <img v-show="sex===1" @click.stop="changeSex" :key="1"  class="uploadwrap-sex-man" src="./images/sex-man.png" />
            <img v-show="sex===2" @click.stop="changeSex" :key="2" class="uploadwrap-sex-lady" src="./images/sex-lady.png" />
        </transition-group>
        <div v-show="formshow" class="uploadwrap-form">
            <input type="text" maxlength="15" placeholder="输入您的姓名" />
            <input type="tel" maxlength="10" placeholder="输入您的工号" />
            <input type="tel" maxlength="13" placeholder="输入您的手机" />
            <textarea placeholder="输入您的宣言" cols="30" rows="3"></textarea>
            <div @click.stop="uploadfile" class="uploadwrap-form-bt">上传照片</div>
        </div>
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
            sex: 1,
            formshow: false,
        };
    },
    computed: {
        ...mapGetters({
        }),
    },
    components: {
    },
    methods: {
        changeSex() {
            if (this.sex === 1) {
                this.sex = 2;
            } else {
                this.sex = 1;
            }
        },
        uploadfile() {
            this.$router.push({ path: '/loading' });
        },
    },
    watch: {

    },
    mounted() {

    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font_size : 108;

@function rem($pixels){
    @return $pixels / $font_size + rem;
}

@keyframes rotate {
    0%,
    100% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes showanimate {
    0%,
    100% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes widthanimate {
    0%,
    100% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
}


.uploadwrap{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #090e30 url('./images/upload_bg.jpg') no-repeat;
    background-size: 100% auto;
    overflow-x: hidden;
    &-form{
        position: absolute;
        background: #232b3a;
        height: 100%;
        &-bt{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: rem(60);
            width: rem(620);
            height: rem(150);
            line-height: rem(150);
            border-radius: rem(80);
            text-align: center;
            background: #3758f1;
            font-size: rem(68);
            color: #FFF;
            font-weight: bold;
            &:active{
                opacity: 0.8;
            }
        }
        input{
            position: relative;
            width: 90%;
            left: 5%;
            height: rem(100);
            text-align: center;
            font-size: rem(50);
            margin-top: rem(30);
        }
        textarea{
            position: relative;
            width: 90%;
            left: 5%;
            font-size: rem(50);
            height: rem(200);
            margin-top: rem(30);
            text-align: center;
        }
    }
    &-sex-man{
        position: absolute;
        width: rem(480);
        height: rem(658);
        left: 50%;
        transform: translateX(-50%);
        top: rem(643);
    }
    &-sex-lady{
        position: absolute;
        width: rem(475);
        height: rem(634);
        left: 50%;
        transform: translateX(-50%);
        top: rem(643);
    }
    &-decoration{
        position: absolute;
        width: 80%;
        left: 50%;
        transform: translateX(-51%);
        pointer-events: none;
        top: rem(520);
        .quan{
            position: absolute;
            left: 50%;
            transform-origin: center;
        }
        &-q1{
            top: rem(98);
            width: rem(689);
            height: rem(689);
            margin-left: rem(-689/2);
            animation: rotate 2s linear infinite;
        }
        &-q2{
            top: rem(80);
            width: rem(730);
            height: rem(727);
            margin-left: rem(-730/2);
            animation: rotate 4s linear reverse infinite;
        }
        &-q3{
            top: rem(60);
            width: rem(780);
            height: rem(780);
            margin-left: rem(-780/2);
            animation: rotate 6s linear infinite;
        }
        &-q4{
            top: rem(18);
            width: rem(850);
            height: rem(859);
            margin-left: rem(-850/2);
            animation: rotate 8s linear reverse infinite;
        }
    }
    &-leftline{
        position: absolute;
        width: rem(10);
        height: rem(10);
        left: rem(100);
        top: rem(80);
        span{
            display: block;
            height: rem(20);
            width: 100%;
            background: #385bf9;
            margin-bottom: rem(5);
            &:nth-child(1){
                animation: showanimate 2s linear infinite;
            }
            &:nth-child(2){
                animation: showanimate 3s linear infinite;
            }
            &:nth-child(3){
                animation: showanimate 4s linear infinite;
            }
            &:nth-child(4){
                animation: showanimate 5s linear infinite;
            }
            &:nth-child(5){
                animation: showanimate 6s linear infinite;
            }
            &:nth-child(6){
                animation: showanimate 7s linear infinite;
            }
            &:nth-child(7){
                animation: showanimate 8s linear infinite;
            }
            &:nth-child(8){
                animation: showanimate 8s linear infinite;
            }
        }
    }
    &-rightline{
        position: absolute;
        width: rem(100);
        height: rem(160);
        top: rem(70);
        right: rem(100);
        span{
            display: block;
            height: rem(10);
            width: 100%;
            background: #385bf9;
            margin-bottom: rem(5);
            &:nth-child(1){
                animation: widthanimate 2s linear alternate infinite;
            }
            &:nth-child(2){
                animation: widthanimate 3s linear infinite;
            }
            &:nth-child(3){
                animation: widthanimate 4s linear alternate infinite;
            }
            &:nth-child(4){
                animation: widthanimate 5s linear infinite;
            }
            &:nth-child(5){
                animation: widthanimate 6s linear alternate infinite;
            }
            &:nth-child(6){
                animation: widthanimate 7s linear infinite;
            }
            &:nth-child(7){
                animation: widthanimate 8s linear alternate infinite;
            }
            &:nth-child(8){
                animation: widthanimate 8s linear infinite;
            }
        }
    }
    &-title{
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: rem(91);
        color: #FFF;
        top: rem(210);
        font-weight: bold;
    }
    &-subtitle{
        position: absolute;
        width: 100%;
        left: 0;
        text-align: center;
        font-size: rem(42);
        color: #FFF;
        bottom: rem(270);
    }
    &-bt{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: rem(60);
        width: rem(620);
        height: rem(150);
        line-height: rem(150);
        border-radius: rem(80);
        text-align: center;
        background: #3758f1;
        font-size: rem(68);
        color: #FFF;
        font-weight: bold;
        &:active{
            opacity: 0.8;
        }
    }
}
</style>
