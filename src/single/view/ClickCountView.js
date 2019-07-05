const App = {};
App.ClickCountView = (clickCounter, updateEl) => {
    if (!clickCounter) {
        throw new Error('ClickCount is Null');
    }
    return {
        updateView() {
            updateEl.innerHTML = clickCounter.getValue();
        }
    };
};
export default App;
