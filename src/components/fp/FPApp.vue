<template>
    <div id="cart">
        <table class="tbl-cart">
            <colgroup>
                <col style="width: 10%;">
                <col style="width: 20%;">
                <col style="width: 20%;">
                <col style="width: 20%;">
                <col style="width: 20%;">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">선택</th>
                    <th scope="col">상품명</th>
                    <th scope="col">가격</th>
                    <th scope="col">수량</th>
                    <th scope="col">총가격</th>
                </tr>
            </thead>
            <tbody>
                <product-list></product-list>
                <tr>
                    <td colspan="2"> 합계 </td>
                    <td> {{singlePrice}} </td>
                    <td> {{totalQuantity}} </td>
                    <td> {{totalPrice}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { products } from '../common/constants';
import { map2, curry, reduce2, go } from '@/components/common/Helpers';

const { log } = console;
const ProductList = {
    name: 'Products',
    functional: true,
    render(h) {
        return go(
            products,
            map2(prod => {
                const tds = [];
                for (const [prop, value] of Object.entries(prod)) {
                    let child = value;
                    if (prop === 'quantity') {
                        child = [h('label', {
                            attrs: { for: prop.charCodeAt(0) }
                        }),
                        h('input', { attrs: { value, id: prop.charCodeAt(0), type: 'number' } })];
                    }
                    if (prop === 'is_selected') {
                        child = [h('input', { attrs: { checked: value, type: 'checkbox' }})];
                    }
                    tds.push(h('td', child));
                }
                tds.push(h('td', prod.price * prod.quantity));
                return h('tr', tds);
            })
        );
    }
};
export default {
    name: 'FPApp',
    components: {
        ProductList
    },
    data() {
        return {
            fp: 'app',
            totalPrice: 0,
            singlePrice: 0,
            totalQuantity: 0
        };
    },
    mounted() {
        const sum = curry((f, iter) => go(
            iter,
            map2(f),
            reduce2((a, b) => a + b)
        ));
        this.totalPrice = sum(p => p.is_selected && (p.price * p.quantity), products);
        this.singlePrice = sum(p => p.is_selected && p.price, products);
        this.totalQuantity = sum(p => p.is_selected && p.quantity, products);
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
