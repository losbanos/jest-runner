<template>
    <div id="cart">
        <table class="tbl-cart">
            <colgroup>
                <col style="width: 30%;">
                <col style="width: 20%;">
                <col style="width: 10%;">
                <col style="width: 40%;">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">상품명</th>
                    <th scope="col">가격</th>
                    <th scope="col">수량</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <product></product>
                <tr>
                    <td>셔츠</td>
                    <td>Price</td>
                    <td>
                        <label for="lbl_quanity"></label>
                        <input type="number" value="" id="lbl_quanity">
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { products } from '../common/constants';

const Product = {
    name: 'Product',
    render(h) {
        return h('div');
    }
};
export default {
    name: 'FPApp',
    components: {
        Product
    },
    date() {
        return {
            fp: 'app'
        };
    }
};
</script>

<style scoped>
.tbl-cart{
    width: 840px;
}
</style>
