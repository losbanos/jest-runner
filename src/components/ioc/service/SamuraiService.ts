import {Component, Vue, Prop} from 'vue-property-decorator';
import container from '@/components/common/DependencyContainer';
import {Glove, Helmet} from '@/components/ioc/model/Shield';
import {Sword} from '@/components/ioc/model/Weapons';
import IWeapon from '@/components/ioc/interface/IWeapon';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import IShield from '@/components/ioc/interface/IShield';

@Component({
    name: 'Samurai'
})
export default class SamuraiService extends Vue {
    @Prop({
        required: true
    }) private shields!: Array<IShield>;
    @Prop({
        required: true
    }) private weapons!: Array<IWeapon>;

    private glove!: Glove;
    private helmet!: Helmet;
    private weapon!: IWeapon;

    created() {
        this.glove = container.get<Glove>(ServiceIdentifier.GLOVE);
        this.helmet = container.get<Helmet>(ServiceIdentifier.HELMET);
        this.weapon = container.get<Sword>(ServiceIdentifier.SWORD);
    }
    mounted() {
        // this.shields.push(this.helmet);
    }
}
