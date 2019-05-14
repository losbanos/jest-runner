import { CallStarWars } from '@/components/sw/CallStarWars';
import { getCurrentLanguage } from '@/components/sw/SWConnector';
import { currentLanguage, DEFAULT_LOCALE } from '@/components/common/constants';


describe('LayoutMain 정상 마운트', () => {
    beforeEach(() => jest.resetModules());
    describe('mock 함수', () => {
        it('mock implementation 테스트', () => {
            jest.mock('@/components/common/constants', () => {
                return {
                    DEFAULT_LOCALE: 'GE'
                };
            });
            const { getCategory } = require('@/components/sw/SWConnector');
            expect(getCategory()).toBe('German');
            // currentLanguage.mockImplementation(() => 'CN');
            // return CallStarWars('r').then(data => console.log(data.results));
        });
        it('mock value 테스트', () => {
            jest.mock('@/components/common/constants', () => ({ DEFAULT_LOCALE: 'CN' }));
            const { getCategory } = require('@/components/sw/SWConnector');
            expect(getCategory()).toBe('China');
        });
    });
});
