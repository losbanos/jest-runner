<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { getFilmName, getPokemonInfo } from '@/components/sw/SWRequest';

const { log } = console;
export default {
    name: 'About',
    data() {
        return {
            titles: []
        };
    },
    mounted() {
        this.iteratable();
    },
    methods: {
        iteratable() {
            const arr = [1, 2, 3];
            arr[Symbol.iterator] = null;
            for (let a of arr) {
                log(a);
            }

            const set = new Set([1, 2, 3]);
            set[Symbol.iterator] = null;
            for (const i of set) {
                log(i);
            }
            const map = new Map([['a', 1], ['b', 2]]);
            for (const a of map) {
                log(a);
            }
        },
        requestTest() {
            const data = getFilmName('ab');
            // data.then(res => res.json()).then(data => console.log(data));
            data.then(res => console.log(res.data));
            const poke = getPokemonInfo('ditto');
            poke.then(res => console.log('pokemon = ', res.data));
        }
    }
};
</script>
