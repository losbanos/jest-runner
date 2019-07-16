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
