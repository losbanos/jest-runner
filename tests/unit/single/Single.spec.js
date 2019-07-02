import App from '@/single/main';

describe('App 클릭 카운터 모듈 Jest', () => {
    let counter = '';
    beforeEach(() => {
        counter = App.ClickCounter();
    });
    describe('getValue', () => {
        it('초기값이 0인 카운터 값을 반환한다', () => {
            expect(counter.getValue()).toBe(0);
        });
    });
    describe('increase()', () => {
        it('카운터를 1 올린다', () => {
            const v = counter.getValue();
            counter.increase();
            expect(counter.getValue()).toBe(v + 1);
        });
    });
});
