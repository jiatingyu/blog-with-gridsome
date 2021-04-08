import Vue from 'vue'
import Vuex from 'vuex';

const store = new Vuex.Store({
    state: () => {
        return {
            slidMenu: [{
                meta: {
                    icon: '',
                    title: '',
                },
                path: ''
            }, {
                meta: {
                    icon: '',
                    title: '',
                },
                path: ''
            }, {
                meta: {
                    icon: '',
                    title: '',
                },
                path: ''
            }, {
                meta: {
                    icon: '',
                    title: '',
                },
                path: ''
            }

            ]
        }
    }
})

export default store;