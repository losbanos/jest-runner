const App = {};
App.initView = (clickCounter, updateEl) => {
    if (!clickCounter) {
        throw Error('isNull');
    }
    if (!updateEl) {
        throw Error('update Element is Null');
    }
    return {
        updateView() {
            updateEl.innerHTML = clickCounter.getValue();
        },
        increaseAndUpdateView() {
            clickCounter.increase();
            this.updateView();
        }
    };
};
export default App;
