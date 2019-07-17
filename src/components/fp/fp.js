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
