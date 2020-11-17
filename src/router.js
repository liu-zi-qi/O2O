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
            }, {
                path: "/zuoer5",
                component: () =>
                    import ('./components/zuoer/zuoer5.vue')
            }, {
                path: "/zuoer51",
                component: () =>
                    import ('./components/zuoer/zuoer51.vue')
            }, {
                path: "/zuoer6",
                component: () =>
                    import ('./components/zuoer/zuoer6.vue')
            }, {
                path: "/zuoer61",
                component: () =>
                    import ('./components/zuoer/zuoer61.vue')
            }, {
                path: "/zuosan1",
                component: () =>
                    import ('./components/zuosan/zuosan1.vue')
            }, {
                path: "/zuosi1",
                component: () =>
                    import ('./components/zuosi/zuosi1.vue')
            }, {
                path: "/zuosi2",
                component: () =>
                    import ('./components/zuosi/zuosi2.vue')
            }, {
                path: "/zuosi3",
                component: () =>
                    import ('./components/zuosi/zuosi3.vue')
            }, {
                path: "/zuosi4",
                component: () =>
                    import ('./components/zuosi/zuosi4.vue')
            }
        ]
    }]
})