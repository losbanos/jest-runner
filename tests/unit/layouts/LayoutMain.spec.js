import { CallStarWars } from '@/components/sw/CallStarWars';
import { getCurrentLanguage } from '@/components/sw/SWConnector';

jest.mock('@/components/common/constants', () => {
    return {
        currentLanguage: jest.fn()
            .mockReturnValueOnce('KR')
            .mockReturnValueOnce('FR')
    };
});


describe('LayoutMain 정상 마운트', () => {
    beforeEach(() => jest.resetModules());
    describe('mock 함수', () => {
        it.only('mock implementation 테스트', () => {
            // getCategory.mockImplementation(() => 'FILMS');
            // const { getCategory } = require('@/components/sw/SWConnector');
            expect(getCurrentLanguage()).toBe('Korean');
            expect(getCurrentLanguage()).toBe('France');
            // return CallStarWars('r').then(data => console.log(data.results));
        });
    });
});
