import {Component, Vue} from 'vue-property-decorator';
// import Vue from 'vue';
import {lazyInject} from '@/components/common/DependencyContainer';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import {AutoCompleteService} from '@/components/auto/service/AutoCompleteService';
import {StarWarsPeople} from '@/components/auto/model/StarWarsResponse';

@Component({
    name: 'AutoComplete'
})
export default class AutoComplete extends Vue {
    @lazyInject(ServiceIdentifier.AutoCompleteService) private autoCompleteService!: AutoCompleteService;

    private results: Array<StarWarsPeople> = [];
    private isProgress: boolean = false;

    created() {
    }
    mounted() {
        this.autoCompleteService.getPeople(this.$refs.inp_search as HTMLElement).subscribe(
            (v: any) => {
                this.results = v;
            },
            e => console.log(e)
        );
        this.autoCompleteService.loadingBar$.subscribe(
            v => {
                this.isProgress = v
            }
        );
        this.autoCompleteService.testSubject();
    }
}