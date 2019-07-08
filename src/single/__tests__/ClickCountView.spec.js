import ClickCountView from '../view/ClickCountView';
import ClickCountModel from '../ClickCountModel';

describe('ClickCountView', () => {
    let clickCounter;
    let updateEl;
    let view;
    beforeEach(() => {
        clickCounter = ClickCountModel.ClickCounter();
        updateEl = document.createElement('span');
        view = ClickCountView.initView(clickCounter, updateEl);
    });
    it('clickCounter 를 주입하지 않으면 에러를 던진다', () => {
        const clickCounter = null;
        const updateEl = document.createElement('span');
        const actual = () => ClickCountView.initView(clickCounter, updateEl);
        expect(actual).toThrow(/Null/);
    });
    it('updateEl 을 주입하지않으면 에러를 던진다', () => {
        const virtual = () => ClickCountView.initView(ClickCountModel.ClickCounter(), null);
        expect(virtual).toThrow(/Null/);
    });
    describe('Update View', () => {
        it('Click Counter의 getValue() 값을 출력한다', () => {
            const v = clickCounter.getValue();
            view.updateView();
            expect(updateEl.innerHTML).toBe(v.toString());
        });
    });
});
