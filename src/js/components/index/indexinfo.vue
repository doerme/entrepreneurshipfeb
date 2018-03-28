<template>
    <div class="indexinfowrap">
        <a v-if="configdata && configdata.videos" class="indexinfowrap-v1 videounit" :href="configdata.videos[0]" >
            <img class="indexinfowrap-cover" src="./images/video_cover1.jpg" />
        </a>
        <a v-if="configdata && configdata.videos" class="indexinfowrap-v2 videounit" :href="configdata.videos[1]">
            <img class="indexinfowrap-cover" src="./images/video_cover2.jpg" />
        </a>
        <a v-if="configdata && configdata.videos" class="indexinfowrap-v3 videounit" :href="configdata.videos[2]">
            <img class="indexinfowrap-cover" src="./images/video_cover3.jpg" />
        </a>
        <div class="indexinfowrap-picline" v-if="configdata && configdata.pics">
            <img class="indexinfowrap-picline-unit" v-for="(item, index) in configdata.pics" v-bind:key="index" :src="item" @click.stop="openimg(item)" />
        </div>
        <baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view">
            <bm-marker :position="center" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="上海新国际博览中心N1馆"  :offset="{width: -35, height: 30}"/>
            </bm-marker>
            <bm-driving v-if="startPoint && endPoint" :start="startPoint" :end="endPoint" :autoViewport="true">
            </bm-driving>
        </baidu-map>
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
            center: { lng: 121.572045, lat: 31.219298 },
            zoom: 3,
            startPoint: null,
            endPoint: null,
        };
    },
    computed: {
        ...mapGetters({
            configdata: 'configdata',
        }),
    },
    components: {
    },
    methods: {
        handler({ BMap, map }) {
            console.log(BMap, map);
            this.zoom = 16;
            this.initstartend();
        },
        openimg(url) {
            window.location.href = url;
        },
        initstartend() {
            const self = this;
            window.afterWxGetLocation = function (res) {
                self.startPoint = new BMap.Point(res.longitude,res.latitude); // eslint-disable-line
                self.endPoint = new BMap.Point(121.572045, 31.219298); // eslint-disable-line
            };
            setTimeout(() => {
                wxGetLocation(); // eslint-disable-line
            }, 3000);


            // if (navigator.geolocation) {
            //     navigator.geolocation.getCurrentPosition(
            //         (position) => {
            //             const longitude = position.coords.longitude;
            //             const latitude = position.coords.latitude;
            //             console.log('geolocation 1', longitude, latitude);
            //         this.startPoint = new BMap.Point(longitude, latitude); // eslint-disable-line
            //         this.endPoint = new BMap.Point(121.572045, 31.219298); // eslint-disable-line
            //         },
            //         (e) => {
            //             const msg = e.code;
            //             const dd = e.message;
            //             console.log('geolocation 1', msg, dd);
            //         },
            //     );
            // }
        },
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

.bm-view{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: rem(2100);
    width: rem(1010);
    height: rem(560);
    overflow: hidden;
}
.indexinfowrap{
    position: relative;
    height: rem(2730);
    width: 100%;
    background: url('./images/content_wrap_bg.jpg') no-repeat;
    background-size: 100% auto; 
    overflow: hidden;
    &-picline{
        position: absolute;
        top: rem(1670);
        left: rem(80);
        width: rem(930);
        height: rem(200);
        white-space: nowrap;
        overflow-y: hidden;
        -webkit-overflow-scrolling : touch;

        &-unit{
            height: 100%;
            display: inline-block;
            margin-right: rem(30);
        }
    }
    &-v1{
        width: rem(375);
        height: rem(260);
        right: rem(88);
        top: rem(180);
    }
    &-v2{
        right: rem(88);
        top: rem(680);
        width: rem(375);
        height: rem(225);
    }
    &-v3{
        right: rem(88);
        top: rem(1220);
        width: rem(375);
        height: rem(195);
    }
    .videounit{
        position: absolute;
        width: rem(378);
        height: rem(270);
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
