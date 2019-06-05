import { CallStarWars } from '@/components/sw/CallStarWars';
import { getCurrentLanguage } from '@/components/sw/SWConnector';
import { currentLanguage, DEFAULT_LOCALE } from '@/components/common/constants';
import { TranslateModule, setTranslateBase } from '@/components/translate/TranslateModule';
import TranslateBase from '@/components/translate/TranslateBase';

jest.mock('@/components/translate/TranslateService', () => () => ({
    strings: {
        polish: {
            agree: 'tak',
            disagree: 'nie'
        },
        malaysian: {
            agree: 'ya',
            disagree: 'tidak'
        }
    }
}));
jest.mock('@/components/translate/TranslateBase', () => {
    return jest.fn().mockImplementation(() => {
        return {
            name: 'Alle23',
            getName() {
                return this.name;
            },
            setName(name) {
                this.name = name;
            }
        };
    });
});

describe('LayoutMain 정상 마운트', () => {
    beforeEach(() => jest.resetModules());
    describe('mock 함수', () => {
        it('mock implementation 테스트', () => {
            jest.mock('@/components/common/constants', () => ({
                DEFAULT_LOCALE: 'GE'
            }));
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
    describe('Service Test', () => {
        it.only('서비스 테스트', () => {
            const r = TranslateModule('malaysian', false);
            expect(r).toBe('They Say: tidak');
        });
        it.only('다른 언어 테스트', () => {
            const r = TranslateModule('polish');
            expect(r).toBe('They Say: tak');
        });
        it.only('class mock test', () => {
            const trans = setTranslateBase('');
            expect(trans.getName()).toEqual('Allen123');
        });
    });
});
