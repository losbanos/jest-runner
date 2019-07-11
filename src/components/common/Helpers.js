const { log, dir } = console;
log('-------------FOR----------');
const arr = [1, 2, 3];
let itrArr = arr[Symbol.iterator]();
itrArr.next();
itrArr.next();
itrArr.next();
for (const i of itrArr) {
    log(i);
}

log('-------------SET----------');
const set1 = new Set([1, 2, 3]);
const iterSet = set1[Symbol.iterator]();
iterSet.next();
iterSet.next();
for (const s of iterSet) {
    log(s);
}
log('-------------MAP----------');
const map1 = new Map([['a', 1], ['b', 2], ['c', 3]]);

const iterMap = map1[Symbol.iterator]();
const valuesMap = map1.values();
// for (const m of valuesMap){ log (m);}
const valuesMap2 = valuesMap[Symbol.iterator]();
// log(valuesMap[Symbol.iterator]);

log(valuesMap2);
log(valuesMap.next());
// log(valuesMap2.next());
// log(valuesMap2.next());

// for (const m of map1) { log(m); };
// for (const m of map1.values()) { log(m); };
// for (const m of map1.entries()) { log(m); };

log('-------------CUSTOM----------');
const iterableCustom = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i === 0 ? { value: undefined, done: true } : {
                    value: i--,
                    done: false
                };
            },
            [Symbol.iterator]() {
                return this;
            }
        };
    }
};
const iteratorCustom = iterableCustom[Symbol.iterator]();
iteratorCustom.next();
for (const c of iteratorCustom) log(c);
