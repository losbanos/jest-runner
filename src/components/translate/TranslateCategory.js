import LANGUAGES from '../common/constants-mini';

export default class TranslateCategory {
    constructor() {
        this.category = [];
        Object.values(LANGUAGES).forEach(n => this.addCategory(n));
    }
    checkCategory() {
        return !!this.category.length;
    }
    translateAvailable(language) {
        return this.category.includes(language);
    }
    addCategory(language) {
        this.category.push(language);
    }
    getCategory() {
        return this.category;
    }
};
