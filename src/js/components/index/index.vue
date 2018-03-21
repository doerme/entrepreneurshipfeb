<template>
  <div class="indexwrap">
    Essential Links 223454
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
$font_size : 75;

@function rem($pixels){
    @return $pixels / $font_size + rem;
}

.indexwrap{
    background: url('./images/bg.jpg') no-repeat;
    background-size: 100% auto;
    height: rem(5016);
}
</style>
