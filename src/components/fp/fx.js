import { go, map2, filter2, reduce2, pipe, curry } from './fp';
import { products } from '@/components/common/constants';

const { log } = console;
const add = (a, b) => a + b;

const sum = curry((f, iter) => go(
    iter,
    map2(f),
    reduce2(add)
));
const totalPrice = sum(p => p.price * p.quantity);
console.log('totalPrice = ', totalPrice(products));

