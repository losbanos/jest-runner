import {Prop, Vue, Component} from 'vue-property-decorator';
import IWeapon from '@/components/ioc/interface/IWeapon';
import IShield from '@/components/ioc/interface/IShield';

@Component
export default class WarriorService extends Vue {
    @Prop({
        required: true
    })
    private name!: string;
    @Prop({
        required: true
    })
    private weapons!: Array<IWeapon>;
    @Prop({
        required: true
    })
    private shields!: Array<IShield>;

    mounted() {
        console.log(this.name);
    }
    attack() {

    }
}
