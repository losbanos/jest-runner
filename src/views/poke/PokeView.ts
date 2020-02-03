import {Component, Vue} from 'vue-property-decorator';
import PokeService from '@service/poke/PokeService';
import PokeApis from '@apis/PokeApis';

@Component({

})
export default class PokeView extends Vue{
    protected mounted() {
        PokeApis.getBerry();
    }
}