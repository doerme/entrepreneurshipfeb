<template>
  <div class="rankwrap">
      
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

.rankwrap{
    position: absolute;
    width: 100%;
    height: rem(2333);
    left: 0;
    top: 0;
    background: #090e30 url('./images/rank_bg.jpg') no-repeat;
    background-size: 100% auto; 
}
</style>
