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
            increase() {
                value++;
            }
        };
    }
};
export default ClickCountModel;
