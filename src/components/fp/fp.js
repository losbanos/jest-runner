const { log } = console;
// const els = document.querySelectorAll('*');
// const iterEls = els[Symbol.iterator]();
// log('next = ', iterEls.next());
// log('next = ', iterEls.next());
// log('next = ', iterEls.next());
// log('next = ', iterEls.next());
// for (const e of els) { log(e); }

function* gener() {
    yield 1;
    if (false) {
        yield 2;
    }
    yield 3;
    return 100;
}

const iterGen = gener();
log(iterGen[Symbol.iterator]() === iterGen);
log(iterGen.next());
log(iterGen.next());
log(iterGen.next());
log(iterGen.next());
log(iterGen.next());

for (const c of gener()) {
    log(c);
}
log('------------------Infinity-------------');
function* infinity(i = 0) {
    while (true) yield i++;
}
const infInter = infinity(1);
log(infInter.next());
log('------------------Limit-------------');
function* limiter(limit, iter) {
    for (const l of iter) {
        yield l;
        if (l === limit) return;
    }
}

log('------------------ODD-------------');
function* odds(limit) {
    for (const d of limiter(limit, infinity(1))) {
        if (d % 2) yield d;
        if (d === limit) return;
    }
}
// log([...odds(20), ...odds(10)]);
const [head, middle, ...tail] = odds(15);
log(head);
log(middle);
log(tail);
// for (const n of odds(20)) {
//     log(n);
// }
log('------------------define map function -------------');
const products = [
    { name: '반팔티', price: 15000 },
    { name: '긴팔티', price: 24000 },
    { name: '셔츠', price: 30000 },
    { name: '반바지', price: 17000 },
    { name: '체크바지', price: 25000 }
];
const map = (iterator, func) => {
    const result = [];
    for (const item of iterator) {
        result.push(func(item));
    }
    return result;
};
if (!global) {
    log(map(document.querySelectorAll('*'), el => el.nodeName));
};
if (!global) {
    const els = document.querySelectorAll('*')[Symbol.iterator]();
    log(els.next());
    log(els.next());
    log(els.next());
}
function* htmlElement() {
    yield 2;
    if (false) yield 4;
    yield 5;
};

log(map(htmlElement(), n => n * 2));

log('------------------ Native Map Constructor --------------');
const m = new Map();
m.set('a', 10);
m.set('b', 20);
const mIter = m[Symbol.iterator]();
log(mIter.next());
// log(mIter.next());
map(m, ([prop, v]) => [prop, v * 2]);
log(m);
log(new Map(map(m, ([prop, v]) => [prop, v * 2])));


log('------------------ Define Filter --------------');
const filter = (iterator, predicate) => {
    const result = [];
    for (const item of iterator) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};
const over20000 = filter( function* () {
    yield { price: 10000 };
    yield { price: 20000 };
    yield { price: 30000 };
    yield { price: 40000 };
}(), p => p.price > 20000);

// log(over20000);

log('------------------ Define Reduce --------------');
const nums = [1, 2, 3, 4, 5];
let total = 0;

const reduce = (predicator, acc, iterator) => {
    if (!iterator) {
        iterator = acc[Symbol.iterator]();
        acc = iterator.next().value;
    }
    for (const a of iterator) {
        acc = predicator(acc, a);
    }
    return acc;
};

log(reduce((a, b) => a + b, nums));
