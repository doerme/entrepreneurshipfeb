<template>
  <div class="indexwrap">
      <UserInfo></UserInfo>
      <IndexInfo></IndexInfo>
      <div class="index-bottom">
          <div class="index-bottom-bt">1号主管招募测试</div>
          <img class="index-bottom-qrcode" src="./images/qrcode.png" />
          <div class="index-bottom-remind">扫描二维码了解详细，帮我点赞</div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserInfo from './userinfo.vue';
import IndexInfo from './indexinfo.vue';
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
        UserInfo, IndexInfo,
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

.index-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: rem(345);
    &-bt{
        position: absolute;
        width: rem(680);
        height: rem(110);
        font-size: rem(48);
        color: #FFF;
        text-align: center;
        line-height: rem(110);
        border-radius: rem(20);
        background: #4295f3;
        left: rem(55);
        bottom: rem(185);
    }
    &-qrcode{
        position: absolute;
        width: rem(220);
        height: rem(220);
        right: rem(68);
        bottom: rem(125);

    }
    &-remind{
        position: absolute;
        font-size: rem(30);
        color: #FFF;
        right: rem(68);
        bottom: rem(58);
    }
}

.indexwrap{
    position: relative;
    background: #1d243e url('./images/bg.jpg') no-repeat;
    background-size: 100% auto;
    height: rem(5300);
    width: 100%;
    overflow-x: hidden;
}
</style>
