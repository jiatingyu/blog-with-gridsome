import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
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