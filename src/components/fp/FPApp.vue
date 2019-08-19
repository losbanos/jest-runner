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
                    <th scope="col">총가격</th>
                </tr>
            </thead>
            <product>
                <tr>
                    <td slot="singlePrice"></td>
                    <td slot="totalQuantity"></td>
                    <td slot="totalPrice"></td>
                </tr>
            </product>
        </table>
    </div>
</template>

<script>
import { products } from '../common/constants';
import { map2, curry, reduce2, go } from '@/components/common/Helpers';

const { log } = console;
const Product = {
    name: 'Product',
    // functional: true,
    render(h) {
        const trees = [];
        // const sum = curry((f, iter) => go(
        //     iter,
        //     map2(f),
        //     reduce2((a, b) => a + b)
        // ));
        // const totalPrice = sum(p => p.price * p.quantity);
        // const singlePrice = sum(p => p.price);
        // const totalQuantity = sum(p => p.quantity);
        for (const prod of products) {
            const tds = [];
            Object.keys(prod).forEach(prop => tds.push(h('td', prod[prop])));
            trees.push(h('tr', [tds]));
        }
        const sums = [];
        console.log(this.$slots.default[0].children);
        for (const child of this.$slots.default) {
            log(child.children);
        }
        trees.push(h('tr', sums));
        return h('tbody', trees);
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
    },
    mounted() {
        const sum = curry((f, iter) => go(
            iter,
            map2(f),
            reduce2((a, b) => a + b)
        ));
        const totalPrice = sum(p => p.price * p.quantity);
        const singlePrice = sum(p => p.price);
        const totalQuantity = sum(p => p.quantity);
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
