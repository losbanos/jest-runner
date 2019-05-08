import { CallStarWars } from '@/components/sw/CallStarWars';
// import { getCategory } from '@/components/sw/SWConnector';

// jest.mock('@/components/sw/SWConnector', () => {
//     return {
//         getCategory: jest.fn()
//     };
// });

// jest.mock('@/components/sw/CallStarWars', () => ({
//     Users: jest.fn(),
//     CallStarWars: jest.fn()
// }));
jest.mock('@/components/common/constants', () => {
    return {
        DEFAULT_LOCALE: 'FR'
    };
});


describe('LayoutMain 정상 마운트', () => {
    beforeEach(() => jest.resetModules());
    describe('mock 함수', () => {
        it.only('mock implementation 테스트', () => {
            // getCategory.mockImplementation(() => 'FILMS');
            const { getCategory } = require('@/components/sw/SWConnector');
            expect(getCategory()).toBe('France');
            // return CallStarWars('r').then(data => console.log(data.results));
        });
    });
});
