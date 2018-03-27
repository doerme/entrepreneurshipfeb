<template>
  <div class="indexwrap">
      <UserInfo></UserInfo>
      <IndexInfo></IndexInfo>
      <div class="index-bottom">
          <div class="index-bottom-bt">1号主管招募测试</div>
          <div class="index-bottom-qrcode js-qrdraw" ></div>
          <div class="index-bottom-remind">扫描二维码了解详细，帮我点赞</div>
      </div>
  </div>
</template>

<script>
/* eslint-disable*/
import { mapGetters } from 'vuex';
import UserInfo from './userinfo.vue';
import IndexInfo from './indexinfo.vue';
import util from '../../public/lib/util.js';
import qrcode from '../../public/lib/arale-qrcode.js';

export default {
    created() {

    },
    data() {
        return {

        };
    },
    computed: {
        ...mapGetters({
            configdata: 'configdata',
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
        if (util.getURLParam('no')) {
            this.$store.dispatch('setUserInfo');
            let uri = null;
            if(!/test/.test(window.location.href)){
                uri = 'http://pingan.weixinlm.com/h5/wch/?no='+ util.getURLParam('no');
            } else {
                uri = 'http://test.weixinlm.com/h5/wch/?no=' + util.getURLParam('no');
            }
            const qrnode = new qrcode({
                render: 'canvas',
                size: 180,
                text: uri
            });
            $('.js-qrdraw').html(qrnode);
        } else {
            this.$router.push({ path: '/upload' });
        }
        if (!this.configdata) {
            this.$store.dispatch('setConfig');
        }
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
        width: rem(590);
        height: rem(110);
        font-size: rem(48);
        color: #FFF;
        text-align: center;
        line-height: rem(110);
        border-radius: rem(20);
        background: #4295f3;
        left: rem(129);
        bottom: rem(150);
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
