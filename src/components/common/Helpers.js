// export const draft = () => 'draft';
// export const getLength = function (list) {
//     return list === null ? undefined : list.length;
// };
const { log } = console;
log('----------- ARR --------------');
const arr = [1, 2, 3];
const itr = arr[Symbol.iterator]();
for (const i of itr) {
    log(i);
}
log('----------- SET --------------');
const set = new Set([1, 2, 3]);
const itr2 = set[Symbol.iterator]();
log(itr2.next());
for (const a of itr2) {
    log(a);
}
log('----------- MAP --------------');
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
const itr3 = map.entries();
const itr4 = itr3[Symbol.iterator]();

// for (const b of map.keys()) {
//     log(b);
// }
// for (const b of map.values()) {
//     log(b);
// }
// for (const b of map.entries()) {
//     log(b);
// }
log('-----------CUSTOM -------------');
const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i === 0 ? { done: true } : {
                    value: i--, done: false
                };
            },
            [Symbol.iterator]() {
                return this;
            }
        };
    }
};
const iterator = iterable[Symbol.iterator]();
const iter2 = iterator[Symbol.iterator]();
iter2.next();
for (const c of iter2) {
    log(c);
}

