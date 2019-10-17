import {Component, Vue} from 'vue-property-decorator';
// import Vue from 'vue';
import {lazyInject} from '@/components/common/DependencyContainer';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import {AutoCompleteService} from '@/components/service/auto/AutoCompleteService';
import {StarWarsPeople} from '@/components/auto/model/StarWarsResponse';
import {MultiUploadService} from '@/components/service/auto/MultiUploadService';
import {TestOperatorService} from '@/components/service/manipulate/TestOperatorService';

@Component({
    name: 'AutoComplete'
})
export default class AutoComplete extends Vue {
    @lazyInject(ServiceIdentifier.AutoCompleteService) private autoCompleteService!: AutoCompleteService;
    @lazyInject(ServiceIdentifier.MultiUploadService) private multiUploadService!: MultiUploadService;
    @lazyInject(ServiceIdentifier.TestOperatorService) private testOperatorService!: TestOperatorService;

    private results: Array<StarWarsPeople> = [];
    private isProgress: boolean = false;

    created() {
        this.testOperatorService.start();
    }
    mounted() {
        // this.autoCompleteService.getPeople(this.$refs.inp_search as HTMLElement).subscribe(
        //     (v: any) => {
        //         console.log('complete = ', v);
        //         this.results = v;
        //     },
        //     e => console.log(e)
        // );
        this.autoCompleteService.loadingBar$.subscribe(
            v => {
                this.isProgress = v
            }
        );
        this.autoCompleteService.resetStaus$.subscribe(
            v => {
                console.log('reset =- ', v);
                this.results = v;
            }
        );
        // this.multiUploadService.load().subscribe(
        //     v => {
        //         console.log(v);
        //         console.log('load complete');
        //     }
        // )
    }
}