export const draft = () => 'draft';
export const getLength = function (list) {
    return list === null ? undefined : list.length;
};

const { log } = console;
log('------- Arr -------');
const arr = [1, 2, 3];
const itr = arr[Symbol.iterator]();
for (const i of itr) {
    log(i);
}
log('------- Set -------');
const set = new Set([1, 2, 3]);
const setItr = set[Symbol.iterator]();
setItr.next();
for (const a of setItr) {
    log(a);
}

log('------- Map -------');
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const b of map) {
    log(b);
}
log('-------- Custom --------');
const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i === 0 ? { done: true } : {
                    value: i--, done: false
                };
            }
        };
    }
};

const iterator = iterable[Symbol.iterator]();
log(iterator.next());
log(iterator.next());

log(parseFloat('14.5px'));
