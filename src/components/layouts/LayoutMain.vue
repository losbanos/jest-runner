<template>
    <div>
        <h2>This is Layout Main</h2>
        <check-language @check-language="onCheckLayout"></check-language>
        <div>복수 언어 선택 : {{locale}}</div>
        <button id="btnStart" @click.prevent="onClickStart">Start</button>
        <currency></currency>
        <img src="abc" @error="onErrorImageLoad($event, 'image')" >
    </div>
</template>

<script>
import {LAYOUT_TYPES} from '@/components/common/constants';
import CheckLanguage from '@/components/layouts/CheckLanguage.vue';
import Currency from '@/components/currency/Currency.vue';
import {onErrorImageLoad} from '@/components/currency/CurrencyUtil';
// import {CallSwPersons } from '@/components/sw/CallStarWars';

export default {
    name: 'LayoutMain',
    components: {Currency, CheckLanguage},
    data() {
        return {
            type: LAYOUT_TYPES.DEFAULT,
            locale: 'English',
            count: 0,
            onErrorImageLoad
        };
    },
    mounted() {
    },
    methods: {
        throwDump() {
            throw new Error('This is Error by Mounted');
        },
        onClickStart() {
            this.increaseCount();
            this.$emit('start', 'speak', this.locale);
        },
        increaseCount() {
            this.count++;
        },
        getCount() {
            return this.count;
        },
        onCheckLayout(ev, v) {
            this.locale.concat(', ', v);
        }
    }
};
</script>
