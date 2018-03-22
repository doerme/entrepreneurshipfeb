<template>
  <div class="userinfowrap">
      <div class="userinfowrap-userface"></div>
      <img class="userinfowrap-q1 quan" src="./images/quan1.png" />
      <img class="userinfowrap-q2 quan" src="./images/quan2.png" />
      <img class="userinfowrap-q3 quan" src="./images/quan3.png" />
      <img class="userinfowrap-q4 quan" src="./images/quan4.png" />
      <img class="userinfowrap-remind" src="./images/top_remind.png" />
      <div class="userinfowrap-note">
          <p>我是：<span>陈小爱</span>, 我在这里等您</p>
          <p>工号：<span>138907890</span> 手机号：<span>18927268989</span></p>
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

@keyframes rotate {
    0%,
    100% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.userinfowrap{
    position: relative;
    height: rem(1980);
    &-note{
        position: absolute;
        width: 100%;
        left: 0;
        top: rem(880);
        text-align: center;
        p{
            height: rem(55);
            line-height: rem(55);
            font-size: rem(42);
            color: #FFF;
            span{
                color: #efa40c;
            }
        }
    }
    &-remind{
        position: absolute;
        width: rem(1142);
        height: rem(274);
        top: rem(516);
        left: rem(-30);
    }
    &-userface{
        position: absolute;
        width: rem(650);
        height: rem(650);
        left: 50%;
        top: rem(120);
        margin-left: rem(-650/2);
        background: #03a8eb;
        border-radius: 50%;
    }
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
</style>
