<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { getFileName } from '@/components/sw/SWRequest';

export default {
    name: 'About',
    data() {
        return {
            titles: []
        };
    },
    mounted() {
        const data = getFileName('ab');
        console.log(data);
        // data.then(data => {
        //     console.log(data);
        // });
    }
};
</script>
