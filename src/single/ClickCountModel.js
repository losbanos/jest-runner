const ClickCountModel = {
    ClickCounter() {
        let value = 0;
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
