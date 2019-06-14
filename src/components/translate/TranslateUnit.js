export default class TranslateUnit {
    constructor(name) {
        this.name = name;
    }
    init() {
        console.log('init');
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
};
