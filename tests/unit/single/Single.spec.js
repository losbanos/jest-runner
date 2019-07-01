import { App } from '@/single/main';

describe('App 클릭 카운터 모듈 Jest', () => {
    describe('getValue', () => {
        it.only('초기값이 0인 카운터 값을 반환한다', () => {
            const counter = App.ClickCounter();
            expect(counter.getValue()).toBe(0);
        });
    });
});
