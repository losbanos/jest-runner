import getTranslateService from './TranslateService';
import TranslateBase from './TranslateBase';

export const TranslateModule = (language, bool = true) => {
    const trans = getTranslateService();
    const getString = stringKey => trans['strings'][language][stringKey];
    const res = bool ? getString('agree') : getString('disagree');
    return `They Say: ${res}`;
};
export const setTranslateBase = name => {
    return new TranslateBase(name);
};
