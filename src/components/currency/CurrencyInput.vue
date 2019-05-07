<template>
    <div>
        <label :for="label">
            <input type="input"
                   :id="label"
                   :value="value"
                   @input="onUpdateValue($event.target.value)"
                   @blur="onFormatValue"
                   @focus="onFocusHandler"
                   ref="inp"/>
            {{label}}
        </label>
    </div>
</template>

<script>
import currencyValidator from '../common/CurrencyValidator';

export default {
    name: 'CurrencyInput',
    props: {
        value: {
            type: Number,
            default: 0
        },
        label: {
            type: String
        }
    },
    methods: {
        onUpdateValue(v) {
            const result = currencyValidator.parse(v, this.value);
            if (result.warning) {
                this.$refs.inp.value = result.value;
            }
            this.$emit('input', result.value);
        },
        onFormatValue() {
            this.$refs.inp.value = currencyValidator.format(this.value);
        },
        onFocusHandler(event) {
            setTimeout(() => {
                event.target.focus();
            }, 0);
        }
    },
    mounted() {
        this.onFormatValue();
    }
};
</script>
