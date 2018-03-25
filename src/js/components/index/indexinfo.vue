<template>
    <div class="indexinfowrap">
        <video class="indexinfowrap-v1 videounit" >
            <source src="http://v.youku.com/v_show/id_XMzEzMzI2ODUyMA==.html?spm=a2h3j.8428770.3416059.1" type="video/mp4" />
        </video>
        <video class="indexinfowrap-v2 videounit" src="http://v.youku.com/v_show/id_XMzEzMzI2ODUyMA==.html?spm=a2h3j.8428770.3416059.1"></video>
        <video class="indexinfowrap-v3 videounit" src="http://v.youku.com/v_show/id_XMzE4ODcyMDcyOA==.html?spm=a2h3j.8428770.3416059.1"></video>
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

.indexinfowrap{
    position: relative;
    height: rem(2730);
    width: 100%;
    background: url('./images/content_wrap_bg.jpg') no-repeat;
    background-size: 100% auto; 
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
