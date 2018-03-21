<script>
import { mapGetters } from 'vuex';

import util from '../../public/lib/util.js';

export default {
    created() {

    },
    data() {
        return {
            swiperOptionA: {
                loop: false,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        },
        ...mapGetters({
            bannersList: 'bannersList',
            userinfo: 'userinfo',
        }),
    },
    components: {
    },
    methods: {
        onSetTranslate() {
            console.log('onSetTranslate');
        },
        bannerJump(jumpurl, sid, ssid, jumptype) {
            console.log('bannerJump', jumpurl, sid, ssid);
            util.hiidoReport({
                acttype: '101',
                uid: this.userinfo.uid,
            });
            if (jumptype === 0) {
                window.open(jumpurl);
            } else {
                YY.instance.channel().JoinChannel(0, sid, ssid); // eslint-disable-line
            }
        },
    },
    watch: {
        bannersList(val) {
            console.log('watch bannersList', val.length);
        },
    },
    mounted() {
        this.$refs.swiperwrapbanner.addEventListener('mouseenter', () => {
            this.swiper.autoplay.stop();
        });
        this.$refs.swiperwrapbanner.addEventListener('mouseleave', () => {
            this.swiper.autoplay.start();
        });
    },
};
</script>

<template>
    <div class="banner" ref="swiperwrapbanner">
        
    </div>
</template>

<style lang="scss">
    .banner{
        width: 805px;
        height: 240px;
        overflow: hidden;
        .banner-unit{
            width: 100%;
            height: 100%;
            cursor: pointer;
            object-fit: cover;
        }
        .swiper-container{
            width: 100%;
            height: 100%;
        }
        .swiper-pagination{
            position: absolute;
            bottom: 0px !important;
            height: 23px;
            background: linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1));
            &-bullet{
                width: 30px;
                height: 3px;
                background: #535253;
                border-radius: 0;
                opacity: 1;
            }
            &-bullet-active{
                width: 30px;
                height: 3px;
                background: #ffc700;
                border-radius: 0;
            }
        }
    }
</style>
