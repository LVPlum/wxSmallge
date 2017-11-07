import Vue from 'vue'
import Router from 'vue-router'
import ETC from '../pages/etc.vue'
import VIP from '../pages/vip.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/etc',
            name: 'etc',
            meta: {
                title: '购买ETC'
            },
            component: ETC
        },
        {
            path: '/vip',
            name: 'vip',
            meta: {
                title: '购买VIP'
            },
            component: VIP
        }
    ]
})