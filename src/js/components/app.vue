<script>
    import VueRouter from '../public/lib/vue-router.js';
    import IndexView from './index/index.vue';
    import RankView from './rank/index.vue';
    import UploadView from './upload/index.vue';
    import Loading from './loading/index.vue';

    const routes = [
        { path: '/', component: IndexView },
        { path: '/upload', component: UploadView },
        { path: '/rank', component: RankView },
        { path: '/loading', component: Loading },
        { path: '*', redirect: '/' },
    ];

    const router = new VueRouter({
        routes,
    });

    export default {
        router,
        name: 'app',
    };
</script>

<template>
<div class="page">
    <!-- <ul class="nav">
        <li class="nav__item"><router-link to="/room">room</router-link></li>
        <li class="nav__item"><router-link to="/person">person</router-link></li>
    </ul> -->
  <router-view class="content"></router-view>
</div>
</template>

<style lang="scss">
    body{
        margin: 0;
        user-select: none;
    }
    .app{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        overflow-x: hidden; 
        &-contain{
            position: absolute;
            top: 80px;
            width: 1175px;
            height: 660px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    [data-dpr="3"] div.legoToast{
        transform: scale(3) translate(-20%,-50%);
    }
    [data-dpr="2"] div.legoToast{
        transform: scale(2) translate(-25%,-50%);
    }
    div.shenquvideo-dimensions{
        height: 100%;
    }
</style>
