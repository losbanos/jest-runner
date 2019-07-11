const { log } = console;
const els = document.querySelectorAll('*');
const iterEls = els[Symbol.iterator]();
log('next = ', iterEls.next());
log('next = ', iterEls.next());
log('next = ', iterEls.next());
log('next = ', iterEls.next());
log('next = ', iterEls.next());
log('next = ', iterEls.next());
log('next = ', iterEls.next());
log('next = ', iterEls.next());
// for (const e of els) { log(e); }
