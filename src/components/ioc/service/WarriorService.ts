import {Component, Vue} from 'vue-property-decorator';
import Ninja from '@/components/ioc/view/Ninja.vue';

@Component({
    name: 'WarriorService',
    components: {
        Ninja
    }
})
export default class WarriorService extends Vue {
    message: string = 'Ninja Warrior';
}
