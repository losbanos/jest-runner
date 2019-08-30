import {Component, Vue} from 'vue-property-decorator'
import Ninja from '@/components/ioc/view/Ninja.vue';
import Samurai from '@/components/ioc/view/Samurai.vue';
import container from '@/components/common/DependencyContainer';
import {Glove, Helmet} from '@/components/ioc/model/Shield';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import {Sword} from '@/components/ioc/model/Weapons';
import IWeapon from '@/components/ioc/interface/IWeapon';
import IShield from '@/components/ioc/interface/IShield';

function f() {
    return function (target: any, propertyKey: string, descriptor: any) {
    }
}
function g() {
    return function(target: any, propertyKey: string, descriptor: any) {
    }
}
@Component({
    name: 'IocAppService',
    components: {
        Ninja,
        Samurai
    }
})
export default class IocAppService extends Vue {
    private ninjaShields!: Array<IShield>;
    private samuraiShields!: Array<IShield>;
    private weapons: Array<IWeapon> = [];

    message: string = 'This is IocApp Service Message';
    created() {

    }
    mounted() {
        const glove = container.get<IShield>(ServiceIdentifier.GLOVE);
        const helmet = container.get<IShield>(ServiceIdentifier.HELMET);
        const armor = container.get<IShield>(ServiceIdentifier.ARMOR);
        const sword = container.get<IWeapon>(ServiceIdentifier.SWORD);
        const shuriken = container.get<IWeapon>(ServiceIdentifier.SHURIKEN);
        this.ninjaShields = [armor];
        this.samuraiShields = [glove, helmet];
    }
};
