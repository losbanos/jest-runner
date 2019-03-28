<template>
    <div>
        <h2>This is Layout Main</h2>
    </div>
</template>

<script>
import { LAYOUT_TYPES } from '@/components/common/constants';

export default {
    name: 'LayoutMain',
    data() {
        return {
            type: LAYOUT_TYPES.DEFAULT
        };
    }
};
</script>
