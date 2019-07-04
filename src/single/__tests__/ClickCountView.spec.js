import App from '../view/ClickCountView';

describe('ClickCountView', () => {
    let clickCounter;
    let updateEl;
    let view;
    beforeEach(() => {
        clickCounter = App.ClickCounter();
        updateEl = document.createElement('span');
        view = App.ClickCountView(clickCounter, updateEl);
    });
    describe('Update View', () => {
        it('Click Counter의 getValue() 값을 출력한다', () => {
            const v = clickCounter.getValue();
            view.update();
            expect(updateEl.innerHTML).toBe(v.toString());
        });
    });
});