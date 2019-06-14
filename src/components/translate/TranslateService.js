import { LANGUAGES } from '@/components/common/constants';
import { getCurrentNation, getTranslations } from '@/components/translate/TranslateModule';

export const getCurrentLanguage = nation => LANGUAGES[getCurrentNation(nation)];
export const getMeetingWord = (lang, bool = true) => {
    const trans = getTranslations();
    const getString = stringKey => {
        return trans['strings'][lang][stringKey];
    };
    const res = bool ? getString('greeting') : getString('bye');
    return `They say ${res}`;
};
export class Translate {
    constructor() {
        console.log(this);
        this.init();
    }
    init() {
        console.log('init');
    }
}
