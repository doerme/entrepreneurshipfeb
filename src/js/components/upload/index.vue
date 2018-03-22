<template>
  <div class="uploadwrap">
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

.uploadwrap{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #090e30 url('./images/upload_bg.jpg') no-repeat;
    background-size: 100% auto;
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
