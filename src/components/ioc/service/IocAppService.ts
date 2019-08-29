import Vue from 'vue';
import {Component} from 'vue-property-decorator'
import Ninja from '@/components/ioc/view/Ninja.vue';
import Samurai from '@/components/ioc/view/Samurai.vue';

function f() {
    return function (target: any, propertyKey: string, descriptor: any) {
    }
}
function g() {
    return function(target: any, propertyKey: string, descriptor: any) {
    }
}
@Component({
    name: 'IocAppService',
    components: {
        Ninja,
        Samurai
    }
})
export default class IocAppService extends Vue {
    message: string = 'This is IocApp Service Message';
    shields: Array<string> = [];
};
