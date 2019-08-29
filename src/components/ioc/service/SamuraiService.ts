import {Component, Vue, Prop} from 'vue-property-decorator';

@Component()
export default class SamuraiService extends Vue {
    @Prop({
        required: true
    })
    private shield: Array<string> = [];

    private shieldName: string = '';

    created() {
        this.shieldName = 'OK?';
    }
}
