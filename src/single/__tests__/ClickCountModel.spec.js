import ClickCounter from '@/single/ClickCountModel';
import App from '../common/App';

describe('App 클릭 카운터 모듈 Jest', () => {
    let counter = '';
    const data = { value: 0 };
    App.ClickCounter = ClickCounter;

    it('초기값을 주입하지 않으면 에러 발생', () => {
        const actual = () => App.ClickCounter(null);
        expect(actual).toThrow();
    });
    beforeEach(() => {
        counter = App.ClickCounter(data);
    });
    describe('getValue', () => {
        it('초기값이 0인 카운터 값을 반환한다', () => {
            expect(counter.getValue()).toBe(0);
        });
    });
    describe('increase()', () => {
        it('카운터를 1 올린다', () => {
            const v = counter.getValue();
            counter.count();
            expect(counter.getValue()).toBe(v + 1);
        });
    });
    describe('set Count Function', () => {
        it('인자로 함수를 넘기면 count 함수를 대체한다.', () => {
            const add2 = v => v + 2;
            const expected = add2(data.value);
            counter.setCountFn(add2).count();
            expect(counter.getValue()).toBe(expected);
        });
    });
});
