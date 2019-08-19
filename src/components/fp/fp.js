import Vue from 'vue';
import router from '@/routers/FPRouter';
import FPApp from '@/components/fp/FPApp';

new Vue({
    name: 'FP',
    router,
    render: h => h(FPApp)
}).$mount('#cart');
