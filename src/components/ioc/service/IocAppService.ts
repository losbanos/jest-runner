import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {container, lazyInject} from '@/components/common/DependencyContainer';
import Ninja from '@/components/ioc/view/Ninja.vue';
import Samurai from '@/components/ioc/view/Samurai.vue';
import {fromEvent, of} from 'rxjs';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import StarWarsService from '@/components/ioc/service/StarWarsService';

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
        Ninja,
        Samurai
    }
})
export default class IocAppService extends Vue {
    // @lazyInject(ServiceIdentifier.STARWARS) private starWarsService!: StarWarsService;
    private starWarsService!: StarWarsService;

    message: string = 'This is IocApp Service Message';
    shields: Array<string> = [];

    created() {
        this.shields = ['1', '2', '3'];
    }
    protected mounted() {
        const click$ = fromEvent(document, 'click');
        click$.subscribe(v => {
            console.log(v.target);
        });
        const numbers$ = of([1, 2, 3, 4, 5]);
        numbers$.subscribe({
            next: v => console.log(v),
            error: e => console.log(e),
            complete: () => console.log('complete')
        });
        this.setStarWars();
    }
    protected setStarWars() {
        this.starWarsService = container.get<StarWarsService>(ServiceIdentifier.STARWARS);
        this.starWarsService.getPeopleData();
    }
}
