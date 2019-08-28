import Vue from 'vue';
import Component from 'vue-class-component';
import Ninja from '@/components/ioc/view/Ninja.vue';

@Component({
    name: 'IocAppService',
    components: {
        ninja: Ninja
    }
})
export default class IocAppService extends Vue {
    message: string  = 'is IOC App Service By TS';
}
