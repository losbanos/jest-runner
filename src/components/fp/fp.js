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
// log(iterGen.next());
// log(iterGen.next());
// log(iterGen.next());
// log(iterGen.next());
// log(iterGen.next());

for (const c of gener()) {
    log(c);
}
// log('------------------Infinity-------------');
function* infinity(i = 0) {
    while (true) yield i++;
}
const infInter = infinity(1);
// log(infInter.next());
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
// log(head);
// log(middle);
// log(tail);
log('------------------define map function -------------');
const products = [
    { name: '반팔티', price: 15000 },
    { name: '긴팔티', price: 24000 },
    { name: 'T셔츠', price: 30000 },
    { name: '반바지', price: 17000 },
    { name: '핸드폰케이스', price: 25000 }
];
const map = (func, iterator) => {
    const result = [];
    for (const item of iterator) {
        result.push(func(item));
    }
    return result;
};
if (!global) {
    log(map(el => el.nodeName), document.querySelectorAll('*'));
};
if (!global) {
    const els = document.querySelectorAll('*')[Symbol.iterator]();
    // log(els.next());
    // log(els.next());
    // log(els.next());
}
function* htmlElement() {
    yield 2;
    if (false) yield 4;
    yield 5;
};

// log(map(n => n * 2, htmlElement()));

log('------------------ Native Map Constructor --------------');
const m = new Map();
m.set('a', 10);
m.set('b', 20);
const mIter = m[Symbol.iterator]();
// log(mIter.next());
map(([prop, v]) => [prop, v * 2], m);
// log(m);
// log(new Map(map(([prop, v]) => [prop, v * 2], m)));


log('------------------ Define Filter --------------');
const filter = (predicate, iterator) => {
    const result = [];
    for (const item of iterator) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};
const over20000 = filter(p => p.price > 20000, (function* () {
    yield { price: 10000 };
    yield { price: 20000 };
    yield { price: 30000 };
    yield { price: 40000 };
}()));

// log('over 2000 = ', over20000);

log('------------------ Define Reduce --------------');
const nums = [1, 2, 3, 4, 5];
const nums2 = [10, 21, 33, 44, 51];
const reduce = (f, acc, iterable) => {
    let iterator;
    if (!iterable) {
        iterator = acc[Symbol.iterator]();
        acc = iterator.next().value;
    } else {
        iterator = iterable;
    }
    for(const n of iterator) {
        acc = f(acc, n);
    }
    return acc;
};

const add = (a, b) => a + b;
// log(reduce(add, 0, nums));
// log(reduce(add, nums2));

log('------------------ Reduce 2 --------------');
// log(reduce(
//     (total, p) => total + p.price,
//     0,
//     products));
// log(
//     reduce(
//         add,
//         map(p => p.price,
//             filter(p => p.price < 20000, products))
//     )
// );
log('------------------ Go --------------');
const go = (...args) => reduce((acc, f) => f(acc), args);

// log(go(
//     0,
//     a => a + 1,
//     a => a + 10,
//     a => a + 100
// ));

log('------------------ Pipe --------------');
const pipe = (f, ...fs) => (...acc) => go(f(...acc), ...fs);

const fpipe = pipe(
    (a, b) => a + b,
    a => a + 1,
    a => a + 20,
    a => a + 200
);
// log(fpipe(10, 12));
log('------------------ revial by go --------------');
go(
    products,
    prod => filter(p => p.price < 20000, prod),
    prod => map(p => p.price, prod),
    prices => reduce(add, prices),
    // log
);

log('------------------ Curry --------------');
const curry = f => (a, ...rest) => rest.length ? f(a, ...rest) : (...rest1) => f(a, ...rest1);
const c = curry((a, b) => a * b);
// log('---+++', c(10));
const reduce2 = curry((f, acc, iterable) => {
    let iterator;
    if (!iterable) {
        iterator = acc[Symbol.iterator]();
        acc = iterator.next().value;
    } else {
        iterator = iterable;
    }
    for(const n of iterator) {
        acc = f(acc, n);
    }
    return acc;
});
const filter2 = curry((predicate, iterator) => {
    const result = [];
    for (const item of iterator) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
})

const map2 = curry((func, iterator) => {
    const result = [];
    for (const item of iterator) {
        result.push(func(item));
    }
    return result;
});
const totalSize = pipe(
    map2(p => p.price),
    reduce2(add)
);
go(
    products,
    filter2(p => p.price < 20000),
    totalSize
);
export {
    filter2,
    map2,
    curry,
    reduce2,
    pipe,
    go
};
