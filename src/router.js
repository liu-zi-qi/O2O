import Vue from 'vue'
import Router from 'vue-router'
import zhuc from './views/zhuc'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        component: () =>
            import ('./views/zhuc')
    }, {
        path: '/zhu',
        component: () =>
            import ('./views/zhu'),
        children: [{
                path: "soyei",
                component: () =>
                    import ('./components/tobu/soyei.vue')
            }, {
                path: "/xgmm",
                component: () =>
                    import ('./components/tobu/xgmm.vue')
            }, {
                path: "/zuoyi1",
                component: () =>
                    import ('./components/zuoyi/zuoyi1.vue')
            }, {
                path: "/zuoyi2",
                component: () =>
                    import ('./components/zuoyi/zuoyi2.vue')
            },
            {
                path: "/zuoyi3",
                component: () =>
                    import ('./components/zuoyi/zuoyi3.vue')
            },
            {
                path: "/zuoer1",
                component: () =>
                    import ('./components/zuoer/zuoer1.vue')
            }, {
                path: "/zuoer2",
                component: () =>
                    import ('./components/zuoer/zuoer2.vue')
            }, {
                path: "/zuoer3",
                component: () =>
                    import ('./components/zuoer/zuoer3.vue')
            }, {
                path: "/zuoer4",
                component: () =>
                    import ('./components/zuoer/zuoer4.vue')
            }
        ]
    }]
})