// import { getCurrentLanguage } from '@/components/translate/TranslateService';
// import { getCurrentNation } from '@/components/translate/TranslateModule';
import { getMeetingWord } from '@/components/translate/TranslateService';
import TranslateUnit from '@/components/translate/TranslateUnit';

jest.mock('@/components/translate/TranslateModule', () => {
    return {
        getTranslations: () => {
            return {
                strings: {
                    korea: {
                        greeting: '안녕',
                        bye: '잘가'
                    },
                    malaysian: {
                        greeting: 'ya',
                        bye: 'tidak'
                    }
                }
            };
        }
    };
});

jest.mock('@/components/translate/TranslateUnit', () => {
    return jest.fn().mockImplementation(() => {
        return {
            name: 'ABC',
            getName: () => 'KTH',
            setName: name => this.name = name
        };
    });
});

describe('LayoutMain 정상 마운트', () => {
    beforeEach(() => jest.resetModules());
    describe('mock 함수', () => {
        it('get Current Language', () => {
            jest.mock('@/components/translate/TranslateModule',
                () => ({ getCurrentNation: () => 'EN' }));
            const { getCurrentLanguage } = require('@/components/translate/TranslateService');
            expect(getCurrentLanguage()).toBe('English');
        });
        it('get Current Language', () => {
            jest.mock('@/components/translate/TranslateModule',
                () => ({ getCurrentNation: () => 'PH' }));
            const { getCurrentLanguage } = require('@/components/translate/TranslateService')
            expect(getCurrentLanguage()).toEqual('Philippin');
        });
    });
    describe('Class Mock 챕터 1', () => {
        it('말라시안 인사', () => {
            expect(getMeetingWord('malaysian')).toEqual('They say ya');
        });
        it('한국 헤어짐 인사', () => {
            expect(getMeetingWord('korea', false)).toEqual('They say 잘가');
        });
        it('트랜스 유닛 클래스', () => {
            const trans = new TranslateUnit();
            expect(TranslateUnit.mock.calls.length).toEqual(1);
            expect(trans.getName()).toBe('KTH');
        })
    });
});
