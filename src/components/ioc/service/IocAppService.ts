import {Component, Vue} from 'vue-property-decorator';
import Ninja from '@/components/ioc/view/Ninja.vue';

@Component({
    name: 'IocAppService',
    components: {
        Ninja
    }
})
export default class IocAppService extends Vue {
    message: string  = 'is IOC App Service By TS';
}
