import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class SamuraiService extends Vue {
    @Prop({
        required: true,
        default: []
    }) private shields!: Array<string>;

    private shieldName: string = '';

    created() {
        this.shieldName = 'OK?';
    }
}
