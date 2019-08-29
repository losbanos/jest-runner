import Vue from 'vue';
import Component from 'vue-class-component';
import container from '@/components/common/DependencyContainer';
import {Ninja as _Ninja} from '@/components/ioc/model/Warriors';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';

@Component({
    name: 'NinjaService'
})
export default class NinjaService extends Vue {
    warrior: string;
    weapon: string;
    private _ninja: _Ninja;

    created(): void {
        this._ninja = container.get<_Ninja>(ServiceIdentifier.WARRIOR);
        this.weapon = this._ninja.weapon.name;
        this.warrior = this._ninja.name;
        this._ninja.start();
    }
}
