export default function (params) {
    if (!params) {
        throw Error('Model Count Data is Null');
    }
    this.data = params || {};
    this.data.value = this.data.value || 0;
    const owner = this;
    return {
        getValue() {
            return owner.data.value;
        },
        count() {
            owner.data.value++;
        },
        setCountFn(fn) {
            this.count = () => {
                owner.data.value = fn(owner.data.value);
            };
            return this;
        }
    };
}
