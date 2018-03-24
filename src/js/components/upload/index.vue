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
      <div class="uploadwrap-title">1号主管分析</div>
      <div class="uploadwrap-subtitle">1号主管分析 比你更懂你</div>
      <div class="uploadwrap-bt">1号主管分析</div>
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

        };
    },
    computed: {
        ...mapGetters({
        }),
    },
    components: {
    },
    methods: {

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
    }
}
</style>
