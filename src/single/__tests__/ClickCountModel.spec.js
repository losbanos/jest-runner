import ClickCountModel from '../ClickCountModel';

describe('ClickCount Model', () => {
    let clickCounter;
    beforeEach(() => {
        clickCounter = ClickCountModel.ClickCounter();
    });
    describe('getValue ', () => {
        it('초기값이 0인 카운터를 반환한다', () => {
            expect(clickCounter.getValue()).toBe(0);
        });
    });
    describe('increase ', () => {
        it('카운터를 1 올린다', () => {
            const v = clickCounter.getValue();
            clickCounter.increase();
            expect(clickCounter.getValue()).toBe(v + 1);
        })
    })
})