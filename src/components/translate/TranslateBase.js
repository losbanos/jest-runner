export default class TranslateBase {
    constructor(name) {
        this.name = name;
    }
    init() {
        this.name = 'KimTaeHoon';
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
