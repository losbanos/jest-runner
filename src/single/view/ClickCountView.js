const App = {};
App.ClickCountView = (clickCounter, updateEl) => {
    return {
        updateView() {
            updateEl.innerHTML = clickCounter.getValue();
        }
    };
};
export default App;
