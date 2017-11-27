import Vue from 'vue'
import Router from 'vue-router'
import ETC from '../pages/etc/etc.vue'
import ETCTwo from '../pages/etc/etctwo.vue'
import ETCThree from '../pages/etc/etcthree.vue'
import Picker from '../pages/etc/picker.vue'
import VIP from '../pages/vip/vip.vue'
import Oil from '../pages/oil/oil.vue'
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
            path: '/etc',
            name: 'etc',
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
            component: ETCTwo,
        },
        {
            path: '/etcthree',
            name: 'etcthree',
            meta: {
                title: '购买ETC'
            },
            component: ETCThree,
        },
        {
            path: '/oil',
            name: 'oil',
            meta: {
                title: '购买油卡'
            },
            component: Oil,
        },
        // {
        //     path: '/picker',
        //     name: 'picker',
        //     meta: {
        //         title: '购买ETC'
        //     },
        //     component: Picker
        // }
    ]
})