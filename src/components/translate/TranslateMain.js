import TranslateCategory from './TranslateCategory';

export default class TranslateMain {
    constructor() {
        this.trans = new TranslateCategory();
    }
    checkLanguage(lang) {
        if (this.trans.translateAvailable(lang)) {
            return `${lang} is Translate Available!!`;
        } else {
            return `${lang} can't Translate, choose another language`;
        }
    }
};
