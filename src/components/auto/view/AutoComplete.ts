import {Component, Vue} from 'vue-property-decorator';
// import Vue from 'vue';
import {lazyInject} from '@/components/common/DependencyContainer';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import {AutoCompleteService} from '@/components/service/auto/AutoCompleteService';
import {StarWarsPeople} from '@/components/auto/model/StarWarsResponse';
import {MultiUploadService} from '@/components/service/auto/MultiUploadService';
import {TestOperatorService} from '@/components/service/manipulate/TestOperatorService';
import {fromEvent} from 'rxjs';
import {pluck} from 'rxjs/internal/operators';

@Component({
    name: 'AutoComplete'
})
export default class AutoComplete extends Vue {
    @lazyInject(ServiceIdentifier.AutoCompleteService)
    private autoCompleteService!: AutoCompleteService;
    @lazyInject(ServiceIdentifier.MultiUploadService)
    private multiUploadService!: MultiUploadService;
    @lazyInject(ServiceIdentifier.TestOperatorService)
    private testOperatorService!: TestOperatorService;

    private results: Array<StarWarsPeople> = [];
    private isProgress: boolean = false;

    created() {
        this.testOperatorService.start();
    }
    mounted() {
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

        fromEvent((this.$refs as any).inp_file, 'change')
            .pipe(
                pluck('target', 'files')
            )
            .subscribe(
                n => console.log(n),
                (err: any) => console.error(err),
                () => console.log('complete')
            )
    }
}