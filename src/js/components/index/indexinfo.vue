<template>
    <div class="indexinfowrap">
        <video v-if="configdata && configdata.videos" class="indexinfowrap-v1 videounit" :src="configdata.videos[0]" ></video>
        <video v-if="configdata && configdata.videos" class="indexinfowrap-v2 videounit" :src="configdata.videos[1]"></video>
        <video v-if="configdata && configdata.videos" class="indexinfowrap-v3 videounit" :src="configdata.videos[2]"></video>
        <div class="indexinfowrap-picline" v-if="configdata && configdata.pics">
            <img class="indexinfowrap-picline-unit" v-for="(item, index) in configdata.pics" v-bind:key="index" :src="item" />
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
            configdata: 'configdata',
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

.indexinfowrap{
    position: relative;
    height: rem(2730);
    width: 100%;
    background: url('./images/content_wrap_bg.jpg') no-repeat;
    background-size: 100% auto; 
    &-picline{
        position: absolute;
        top: rem(1670);
        left: rem(80);
        width: rem(930);
        height: rem(200);
        white-space: nowrap;
        overflow-y: auto;
        &-unit{
            height: 100%;
            display: inline-block;
            margin-right: rem(30);
        }
    }
    &-v1{
        right: rem(88);
        top: rem(180);
    }
    &-v2{
        right: rem(88);
        top: rem(680);
    }
    &-v3{

    }
    .videounit{
        position: absolute;
        width: rem(378);
        height: rem(270);
    }
}
</style>
