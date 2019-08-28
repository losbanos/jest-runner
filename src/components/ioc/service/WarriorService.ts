import Vue from 'vue';
import Component from 'vue-class-component';
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
