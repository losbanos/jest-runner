import ClickCountView from '../view/ClickCountView';
import ClickCountModel from '../ClickCountModel';

describe('ClickCountView', () => {
    let clickCounter;
    let updateEl;
    let view;
    let triggerEl;
    const data = { value: 0};
    beforeEach(() => {
        clickCounter = ClickCountModel.ClickCounter(data);
        updateEl = document.createElement('span');
        triggerEl = document.createElement('button');
        view = ClickCountView.initView(clickCounter, { updateEl, triggerEl });
    });
    describe('디폴트 값 테스트', () => {
        it('clickCounter 를 주입하지 않으면 에러를 던진다', () => {
            const clickCounter = null;
            const updateEl = document.createElement('span');
            const actual = () => ClickCountView.initView(clickCounter, { updateEl });
            expect(actual).toThrow(/Null/);
        });
        it('updateEl 을 주입하지않으면 에러를 던진다', () => {
            const virtual = () => ClickCountView.initView(
                ClickCountModel.ClickCounter(data), { updateEl: null }
            );
            expect(virtual).toThrow(/Null/);
        });
    });
    describe('Update View', () => {
        it('Click Counter의 getValue() 값을 출력한다', () => {
            const v = clickCounter.getValue();
            view.updateView();
            expect(updateEl.innerHTML).toBe(v.toString());
        });
    });
    describe('increaseAndUpdateView 는', () => {
        it('카운트 값을 증가한다', () => {
            const s = jest.spyOn(clickCounter, 'increase');
            view.increaseAndUpdateView();
            expect(s).toHaveBeenCalled();
        });
        it('증가된 카운트 값을 화면에 출력한다', () => {
            const v = jest.spyOn(view, 'updateView');
            view.increaseAndUpdateView();
            expect(v).toHaveBeenCalled();
        });
        it('클릭 이벤트가 발생하면 increaseAndUpdateView를 실행한다', () => {
            const act = jest.spyOn(view, 'increaseAndUpdateView');
            triggerEl.click();
            expect(act).toHaveBeenCalled();
        });
    });
});
