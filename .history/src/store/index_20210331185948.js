import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        slidMenu: [{
            meta: {
                icon: '',
                title: '1',
            },
            path: ''
        }, {
            meta: {
                icon: '',
                title: '2',
            },
            path: ''
        }, {
            meta: {
                icon: '',
                title: '3',
            },
            path: ''
        }, {
            meta: {
                icon: '',
                title: '4',
            },
            path: ''
        }

        ]
    }
})

export default store;