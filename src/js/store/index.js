import Vuex from 'vuex';
import commonstate from './modules/commonstate.js';

export default new Vuex.Store({
    modules: {
        commonstate,
    },
});
