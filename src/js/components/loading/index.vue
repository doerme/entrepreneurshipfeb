<template>
  <div class="loadingwrap">
      <div class="loadingwrap-nick">陈大爱</div>
      <div class="loadingwrap-remind">1号主管值正在加速检测中.....</div>
      <img v-show="usersex === 1" class="loadingwrap-main-male" src="./images/male.png" />
      <img v-show="usersex === 2" class="loadingwrap-main-female" src="./images/female.png" />
      <img class="loadingwrap-scan" src="./images/scan.png" />
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
            usersex: 'usersex',
        }),
    },
    components: {
    },
    methods: {
        takeScreenshot() {
            console.log('test');
            html2canvas(document.getElementById('viewscan')).then(canvas => { // eslint-disable-line
                document.body.appendChild(canvas);
            });
        },
    },
    watch: {

    },
    mounted() {
        setTimeout(() => {
            this.$router.push({ path: '/result' });
        }, 2000);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font_size : 108;

@function rem($pixels){
    @return $pixels / $font_size + rem;
}

@keyframes scanmove {
    0%,
    100% {
       top: rem(400);
    }
    100% {
       top: rem(1400);
    }
}

.loadingwrap{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #11151e url('./images/bg.jpg') no-repeat;
    background-size: 100% auto;
    &-nick{
        position: absolute;
        left: rem(120);
        top: rem(100);
        height: rem(70);
        background: #FFF;
        padding-left: rem(25);
        padding-right: rem(25); 
        font-size: rem(48);
        color: #3e16c3;
    }
    &-remind{
        position: absolute;
        left: rem(200);
        top: rem(180);
        font-size: rem(48);
        color: #FFF;
    }
    &-main-male{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: rem(422);
        top: rem(410);
    }
    &-main-female{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: rem(504);
        top: rem(435);
    }
    &-scan{
        position: absolute;
        left: 50%;
        margin-left: rem(-655/2);
        width: rem(655);
        height: rem(199);
        animation: scanmove 2s linear alternate infinite;
    }
}
</style>
