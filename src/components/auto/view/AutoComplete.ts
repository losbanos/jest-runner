import {Component, Vue} from 'vue-property-decorator';
import {lazyInject} from '@/components/common/DependencyContainer';
import ServiceIdentifier from '@/components/common/ServiceIdentifier';
import {AutoCompleteService} from '@/components/auto/service/AutoCompleteService';

@Component
export default class AutoComplete extends Vue {
    @lazyInject(ServiceIdentifier.AutoCompleteService) private autoCompleteService!: AutoCompleteService;
    created() {

    }
    mounted() {
        this.autoCompleteService.setTargetElement(this.$refs.inp_search as HTMLElement);
    }
}