import Vue from 'vue';
import Router from 'vue-router';
import LayoutMain from './components/layouts/LayoutMain';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'LayoutMain',
            component: LayoutMain
        }, {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }, {
            path: '/currency',
            name: 'currency',
            component: () => import('./components/currency/Currency.vue')
        }
    ]
});
