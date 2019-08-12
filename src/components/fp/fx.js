import { go, map2, filter2, reduce2, pipe, curry } from './fp';
import { products } from '@/components/common/constants';

const { log } = console;
go(
    products,
    map2(p => p.quantity),
    reduce2((a, b) => a + b),
    log
);
const add = (a, b) => a + b;
const sum = curry((f, iterator) => go(
    iterator,
    map2(f),
    reduce2(add))
);
const totalQuantity = sum(p => p.quantity);
const totalPrice = sum(p => p.quantity * p.price);

log('total Quantity =', totalQuantity(products));
log('total Price = ', totalPrice(products));
log(sum(u => u.age, [
    { age: 30 },
    { age: 20 },
    { age: 540 }
]));
