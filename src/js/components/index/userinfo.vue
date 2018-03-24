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
      <div class="userinfowrap-table">
          <img class="userinfowrap-table-title" src="./images/table-title.png" />
          <table class="userinfowrap-table-main">
              <tr>
                  <td>88%</td>
                  <td>88%</td>
                  <td>88%</td>
                  <td>88%</td>
                  <td>88%</td>
                  <td>88%</td>
                  <td>88%</td>
              </tr>
              <tr>
                  <td>学习能力</td>
                  <td>自信心</td>
                  <td>执行力</td>
                  <td>创新</td>
                  <td>意志力</td>
                  <td>沟通能力</td>
                  <td>技能</td>
              </tr>
          </table>
          <div class="userinfowrap-table-value">1号主管值 92%</div>
          <div class="userinfowrap-table-subvalue">
              <p>陈小爱，你的自信心爆表，2018创业</p>
              <p>会找的就是你，加入我们吧！</p>
          </div>
          <div class="userinfowrap-table-btwrap">
              <div class="bt-like">300</div>
              <router-link class="bt-left" to="/rank">明星排行榜</router-link>
              <router-link class="bt-right" to="/upload">我也要玩</router-link>
          </div>
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
    height: rem(2200);
    &-table{
        position: absolute;
        top: rem(1120);
        left: 0;
        width: 100%;
        &-value{
            font-size: rem(48);
            color: #efa40c;
            text-align: center;
            padding-top: rem(40);
        }
        &-subvalue{
            font-size: rem(42);
            color: #FFF;
            text-align: center;
        }
        &-btwrap{
            position: relative;
            width: 100%;
            .bt-like{
                position: absolute;
                width: rem(235);
                height: rem(235);
                left: 50%;
                transform: translateX(-50%);
                background: url('./images/zan-bt.png') no-repeat;
                background-size: 100% auto; 
                font-size: rem(36);
                color: #3758f1;
                text-align: center;
                line-height: rem(330);
                &:active{
                    opacity: 0.8;
                }
            }
            .bt-left{
                position: absolute;
                background: #4295f3;
                width: rem(330);
                height: rem(90);
                font-size: rem(48);
                color: #FFF;
                text-align: center;
                line-height: rem(90);
                top: rem(280);
                left: rem(170);
                border-radius: rem(80);
                text-decoration: none;
                &:active{
                    opacity: 0.8;
                }
            }
            .bt-right{
                position: absolute;
                background: #4295f3;
                width: rem(330);
                height: rem(90);
                font-size: rem(48);
                color: #FFF;
                text-align: center;
                line-height: rem(90);
                top: rem(280);
                right: rem(170);
                border-radius: rem(80);
                text-decoration: none;
                &:active{
                    opacity: 0.8;
                }
            }
        }
        &-title{
            width: 100%;
        }
        &-main{
            width: rem(1050);
            font-size: rem(32);
            font-family: "Adobe Heiti Std";
            color: rgb(255, 255, 255);
            font-variant: small-caps;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            text-shadow: 0 rem(3) #395d93, rem(3) 0#395d93, rem(-3) 0#395d93, 0 rem(-3)#395d93;
            td{
                width: 14.2%;
            }
        }
    }
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
