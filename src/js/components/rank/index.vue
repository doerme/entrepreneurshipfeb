<template>
    <div class="rankwrap">
        <div class="user-avatar" v-if="rankList.length > 0">
            <div class="user-avatar-main" :style="'background-image:url('+rankList[0].img+');background-size:contain;background-position:center center;background-repeat:no-repeat;background-color:#2169ab;'"></div>
        </div>
        <div v-if="rankList.length > 0" class="user-likenum"><span>{{rankList[0].name}}</span> <span>{{rankList[0].zan}}赞</span></div>
        <ul class="rank-list">
            <li v-for="(item, index) in rankList" 
                v-bind:key="index" v-show="index > 1">
                <img class="rank-avatar" :src="item.img" />
                <span class="rank-name">{{item.name}}</span>
                <span class="rank-num">{{item.zan}}赞</span>
            </li>
        </ul>
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
            rankList: 'rankList',
            userinfo: 'userinfo',
        }),
    },
    components: {
    },
    methods: {

    },
    watch: {

    },
    mounted() {
        this.$store.dispatch('setRankList');
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$font_size : 108;

@function rem($pixels){
    @return $pixels / $font_size + rem;
}

.rankwrap{
    position: absolute;
    width: 100%;
    height: rem(2333);
    left: 0;
    top: 0;
    background: #090e30 url('./images/rank_bg.jpg') no-repeat;
    background-size: 100% auto;
    .rank-list{
        position: absolute;
        left: 50%;
        top: rem(700);
        transform: translateX(-50%);
        width: rem(630);
        li{
            position: relative;
            width: 100%;
            overflow: hidden;
            height: rem(170);
            line-height: rem(170);
        }
        .rank-avatar{
            width: rem(135);
            height: rem(135);
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
            object-fit: cover;
        }
        .rank-name{
            font-size: rem(42);
            color: #FFF;
            display: inline-block;
            vertical-align: middle;
            width: rem(320);
            text-indent: rem(50);
        }
        .rank-num{
            font-size: rem(42);
            color: #FFF;
            display: inline-block;
            vertical-align: middle;
        }
    }
    .user-avatar{
        position: absolute;
        left: 50%;
        top: rem(240);
        transform: translateX(-50%);
        width: rem(382);
        height: rem(382);
        background: url('./images/avatar_wrap.png') no-repeat;
        background-size: 100% auto;
        &-main{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: rem(316);
            height: rem(316);
            border-radius: 50%;
            object-fit: contain;
        }
    }
    .user-likenum{
        position: absolute;
        width: 100%;
        top: rem(630);
        left: 0;
        width: 100%;
        text-align: center;
        font-size: rem(48);
        color: #FFF;
    }
}
</style>
