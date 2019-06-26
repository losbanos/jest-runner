import Vue from 'vue';
import App from './App';
import router from './router';
import 'bulma/css/bulma.min.css';
import '../public/js/dummy';

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
