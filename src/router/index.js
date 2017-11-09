import Vue from 'vue'
import Router from 'vue-router'
import ETC from '../pages/etc/home.vue'
import ETCTwo from '../pages/etc/etctwo.vue'
import VIP from '../pages/vip/vip.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/vip',
            name: 'vip',
            meta: {
                title: '购买VIP'
            },
            component: VIP
        },
        {
            path: '/home',
            name: 'home',
            meta: {
                title: '购买ETC'
            },
            component: ETC,
        },
        {
            path: '/etctwo',
            name: 'etctwo',
            meta: {
                title: '购买ETC'
            },
            component: ETCTwo
        }
    ]
})