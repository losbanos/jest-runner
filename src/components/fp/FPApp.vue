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
                    <th scope="col">합계</th>
                </tr>
            </thead>
            <tbody>
                <product></product>
                <tr>
                    <td>총합</td>
                    <td></td>
                    <td></td>
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
    functional: true,
    render(h) {
        const trees = [];
        for (const prod of products) {
            const tds = [];
            Object.keys(prod).forEach(prop => tds.push(h('td', prod[prop])));
            trees.push(h('tr', [tds]));
        }
        return trees;
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
    border-collapse: collapse;
}
.tbl-cart thead th{
    border-bottom: 2px solid black;
}
.tbl-cart td{
    text-align: center;
    padding: 4px 0;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
}
</style>
