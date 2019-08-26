import Vue from 'vue';
import IocApp from './IocApp.vue';

new Vue({
    name: 'ioc',
    render: h => h(IocApp)
}).$mount('#wrapper');
