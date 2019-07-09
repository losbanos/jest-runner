import CounterModel from './common/CounterModel';

const ClickCountModel = {
    ClickCounter(data) {
        if (!data) {
            throw Error('Model Count Data is Null');
        }
        let { value = 0 } = data;
        return {
            getValue() {
                return value;
            },
            count() {
                value++;
            },
            setCountFn(fn) {
                this.count = () => {
                    value = fn(value);
                };
                return this;
            }
        };
    }
};
export default ClickCountModel;
