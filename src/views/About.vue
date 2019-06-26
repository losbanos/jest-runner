<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import {getFilmName, getPokemonInfo} from '@/components/sw/SWRequest';

export default {
    name: 'About',
    data() {
        return {
            titles: []
        };
    },
    mounted() {
        const data = getFilmName('ab');
        data.then(res => console.log(res.data));
        const poke = getPokemonInfo('ditto');
        poke.then(res => console.log('pokemon = ', res));

        const all = document.querySelectorAll('*');
        const iter = all[Symbol.iterator]();
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter.next());
        console.log(iter[Symbol.iterator]());
        for (const e of iter) {
            // console.log(e);
        }
    }
};
</script>
