<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { getFilmName } from '@/components/sw/SWRequest';

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
    }
};
</script>
