import Vue from 'vue';
import Component from 'vue-class-component';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import container from '@/components/common/DependencyContainer';
import {Ninja as _Ninja} from '@/components/ioc/model/Warriors';

@Component({
    name: 'Ninja'
})
export default class Ninja extends Vue {
    private _ninja: _Ninja;

    crated(): void {
        this._ninja = container.get<_Ninja>(ServiceIdentifier.WARRIOR);
        this.warrior = this._ninja.name;
        this.weapon = this._ninja.weapon.name;
    }
}
