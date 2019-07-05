import ClickCountView from '../view/ClickCountView';
import ClickCountModel from '../ClickCountModel';

describe('ClickCountView', () => {
    let clickCounter;
    let updateEl;
    let view;
    beforeEach(() => {
        clickCounter = ClickCountModel.ClickCounter();
        updateEl = document.createElement('span');
        view = ClickCountView.ClickCountView(clickCounter, updateEl);
    });
    it('clickCounter 를 주입하지 않으면 에러를 던진다', () => {
        const clickCounter = null;
        const updateEl = document.createElement('span');
        const actual = () => ClickCountView.ClickCountView(clickCounter, updateEl);
        expect(actual).toThrowError(/Null/);
    });
    it('updateEl 을 주입하지않으면 에러를 던진다', () => {

    });
    describe('Update View', () => {
        it('Click Counter의 getValue() 값을 출력한다', () => {
            const v = clickCounter.getValue();
            view.updateView();
            expect(updateEl.innerHTML).toBe(v.toString());
        });
    });
});
