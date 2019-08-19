import Router from 'vue-router';
import FPApp from '@/components/fp/FPApp';

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            name: 'FP App',
            path: '/fp',
            component: FPApp
        }
    ]
});
