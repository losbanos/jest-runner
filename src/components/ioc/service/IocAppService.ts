import {Component, Vue} from 'vue-property-decorator';
import Warrior from '@/components/ioc/view/Warrior.vue';
import {container, lazyInject} from '@/components/common/DependencyContainer';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import IWeapon from '@/components/ioc/interface/IWeapon';
import IShield from '@/components/ioc/interface/IShield';
import StarWarsService from '@/components/ioc/service/StarWarsService';
import RxjsService from "@/components/ioc/service/RxjsService";

function f() {
    return function (target: any, propertyKey: string, descriptor: any) {
    };
}
function g() {
    return function (target: any, propertyKey: string, descriptor: any) {
    };
}
@Component({
    name: 'IocAppService',
    components: {
        Warrior
    }
})
export default class IocAppService extends Vue {
    @lazyInject(ServiceIdentifier.STARWARS) private starWarsService!: StarWarsService;
    @lazyInject(ServiceIdentifier.RXJSSERVICE) private rxjsService!: RxjsService;

    message: string = 'This is IocApp Service Message';
    ninjaShields!: Array<IShield>;
    ninjaWeapons!: Array<IWeapon>;
    samuraiShields!: Array<IShield>;
    samuraiWeapons!:Array<IWeapon>;

    created() {
        const glove = container.get<IShield>(ServiceIdentifier.GLOVE);
        const helmet = container.get<IShield>(ServiceIdentifier.HELMET);
        const armor = container.get<IShield>(ServiceIdentifier.ARMOR);
        const sword = container.get<IWeapon>(ServiceIdentifier.SWORD);
        const shuriken = container.get<IWeapon>(ServiceIdentifier.SHURIKEN);

        this.ninjaShields = [armor];
        this.ninjaWeapons = [shuriken];
        this.samuraiShields = [glove, helmet];
        this.samuraiWeapons = [sword];

    }
    protected mounted() {
        this.rxjsService.secondExec();
        // this.setStarWars();
    }
    protected setStarWars() {
        // console.log('starWarsService = ', this.starWarsService);
        this.starWarsService.getPeopleData();
    }
    protected onClickButton() {
        this.rxjsService.setClicked().subscribe(
            (v: EventTarget) => {
                console.log('v = ', v);
                this.rxjsService.setClickValue();
            },
            (e: any) => {
                console.log('error = ', e);
            }
        );
    }
}
