<template>
    <div class="field">
        <label :for="index" class="checkbox"
               v-for="(lang, index) in languages" :key="lang.toString()">
            <input type="checkbox" :id="index" value="lang" />
            {{lang}}
        </label>
    </div>
</template>

<script>
import {LANGUAGES} from '../common/constants';

export default {
    name: 'CheckLayout',
    data() {
        return {
            checkedLang: [],
            languages: LANGUAGES
        };
    }
};
</script>
