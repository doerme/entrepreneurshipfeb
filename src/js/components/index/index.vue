<template>
  <div class="indexwrap">
      <UserInfo></UserInfo>
      <IndexInfo></IndexInfo>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserInfo from './userinfo.vue';
import IndexInfo from './indexinfo.vue';
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
        UserInfo, IndexInfo,
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

.indexwrap{
    background: url('./images/bg.jpg') no-repeat;
    background-size: 100% auto;
    height: rem(5016);
    width: 100%;
    overflow-x: hidden;
}
</style>
