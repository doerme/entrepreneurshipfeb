import App from './components/app.vue';
import store from './store';

Vue.filter('numberFormat', (value) => {
    if (!value) return 0;
    if (Number.isNaN(parseFloat(value))) {
        return value;
    }
    if (parseInt(value, 10) === value) {
        return value;
    }
    console.log('before tofixed', value);
    return value.toFixed(2);
});

const randerVue = () => {
    new Vue({ // eslint-disable-line
        el: '#app',
        store,
        template: '<App/>',
        components: { App },
    });
};
console.log('randerVue');
randerVue();
