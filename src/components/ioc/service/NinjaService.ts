import Vue from 'vue';
import Component from 'vue-class-component';
import container from '@/components/common/DependencyContainer';
import {Ninja} from '@/components/ioc/model/Warriors';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';

@Component({
    name: 'NinjaService'
})
export default class NinjaService extends Vue {
    public warrior!: string;
    public weapon!: string;
    private ninja!: Ninja;

    created(): void {
        this.ninja = container.get<Ninja>(ServiceIdentifier.NINJA);
        this.weapon = this.ninja.weapon.name;
        this.warrior = this.ninja.name;
        this.ninja.start();
    }
}
