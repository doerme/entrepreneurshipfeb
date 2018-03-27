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
            <img v-show="usersex===1" @click.stop="changeSex" :key="1"  class="uploadwrap-sex-man" src="./images/sex-man.png" />
            <img v-show="usersex===2" @click.stop="changeSex" :key="2" class="uploadwrap-sex-lady" src="./images/sex-lady.png" />
        </transition-group>
        <div v-show="formshow" class="uploadwrap-form">
            <input type="text" maxlength="15" placeholder="输入您的姓名" ref="inputname" :value="myinfo.name" />
            <input type="tel" maxlength="10" placeholder="输入您的工号" ref="inputno" :value="myinfo.no"/>
            <p class="uploadwrap-form-tips">*工号不能修改，请认真填写</p>
            <input type="tel" maxlength="13" placeholder="输入您的手机" ref="inputmobile" :value="myinfo.mobile"/>
            <textarea ref="inputsentence" placeholder="输入您的宣言" cols="30" rows="3" :value="myinfo.sentence"></textarea>
            <div class="uploadwrap-form-bt" @click.stop="uploadwx">
                <input v-if="false" @change="uploadfile" ref="selectfileele" class="selectfile" type="file" accept="image/*" size="100">
                上传照片
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import util from '../../public/lib/util.js';

export default {
    created() {

    },
    data() {
        return {
            formshow: false,
        };
    },
    computed: {
        ...mapGetters({
            usersex: 'usersex',
            dataurl: 'dataurl',
            toastmsg: 'toastmsg',
            myinfo: 'myinfo',
        }),
    },
    components: {
    },
    methods: {
        changeSex() {
            if (this.usersex === 1) {
                this.$store.dispatch('setUserSex', 2);
            } else {
                this.$store.dispatch('setUserSex', 1);
            }
        },
        uploadfile(e) {
            const self = this;
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = function () {
                const dataURL = reader.result;
                // console.log('dataURL', dataURL);
                self.$store.dispatch('setDataUrl', dataURL);
            };
            reader.readAsDataURL(file); // 读出 base64
            // this.$refs.selectfileele
            this.$router.push({ path: '/loading' });
        },
        uploadwxtest() {
            const self = this;
            const inputname = self.$refs.inputname.value;
            const no = self.$refs.inputno.value;
            const mobile = self.$refs.inputmobile.value;
            const sentence = self.$refs.inputsentence.value;
            if(inputname.length < 1) {
                this.$toast.center('请输入您的姓名');
                return;
            }else if(no.length < 1) {
                this.$toast.center('请输入您的工号');
                return;
            }else if(mobile.length < 1 || !(/^1[0-9]{10}$/.test(mobile))){
                this.$toast.center('请正确输入您的手机');
                return;
            }else if(sentence.length < 1) {
                this.$toast.center('请输入您的宣言');
                return;
            }
            self.$store.dispatch('setDataUrl', {
                name:inputname,
                no:no,
                mobile:mobile,
                sentence:sentence,
                media_id: 'LX4JyzGVFr8fcllIByLUDkbgTTTMAkEEcKLNEDWONpUVtAWnHTCk9m7ERxFujPqH',
                local_id: 'wxLocalResource://5437737139662783' 
            });
        },
        uploadwx() {
            const self = this;
            const inputname = self.$refs.inputname.value;
            const no = self.$refs.inputno.value;
            const mobile = self.$refs.inputmobile.value;
            const sentence = self.$refs.inputsentence.value;
            if(inputname.length < 1) {
                this.$toast.center('请输入您的姓名');
                return;
            }else if(no.length < 1) {
                this.$toast.center('请输入您的工号');
                return;
            }else if(mobile.length < 1 || !(/^1[0-9]{10}$/.test(mobile))){
                this.$toast.center('请正确输入您的手机');
                return;
            }else if(sentence.length < 1) {
                this.$toast.center('请输入您的宣言');
                return;
            }
            wxChooseImage(); // eslint-disable-line
            
            window.afterwxChooseImage = () => {
                self.$router.push({ path: '/loading' });
            }
            window.afterwxUploadImage = (localId, mediaId) => {
                console.log('afterwxUploadImage',localId, mediaId);
                self.$store.dispatch('setDataUrl', {
                    name:inputname,
                    no:no,
                    mobile:mobile,
                    sentence:sentence,
                    media_id: mediaId,
                    local_id: localId
                });
                // this.$router.push({ path: '/result' });
            }
        },
    },
    watch: {
        userinfo(val) {
            console.log('upload userinfo change', val);
            this.$router.push({ path: '/result' });
        },
        toastmsg(val) {
            this.$toast.center(val);
        },
    },
    mounted() {
        this.$store.dispatch('setMyInfo');
        console.log('dpr', $('html').data('dpr'));
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
        height: 90%;
        padding-top: 15%;
        &-tips{
            width: 100%;
            text-align: center;
            color: rgb(253, 108, 108);
            font-size: rem(40);
            margin-bottom: rem(80);
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
            .selectfile{
                position: absolute;
                top: 0;
                left: 0px;
                height: 100%;
                width: 100%;
                opacity: 0;
            }
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
            padding: 0;
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
                animation: widthanimate 3s linear alternate infinite;
            }
            &:nth-child(3){
                animation: widthanimate 4s linear alternate infinite;
            }
            &:nth-child(4){
                animation: widthanimate 5s linear alternate infinite;
            }
            &:nth-child(5){
                animation: widthanimate 6s linear alternate infinite;
            }
            &:nth-child(6){
                animation: widthanimate 7s linear alternate infinite;
            }
            &:nth-child(7){
                animation: widthanimate 8s linear alternate infinite;
            }
            &:nth-child(8){
                animation: widthanimate 8s linear alternate infinite;
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
