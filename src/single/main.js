const { log } = console;

const App = {};
App.ClickCounter = () => {
    let value = 0;
    return {
        getValue() {
            return value;
        },
        increase() {
            value++;
        }
    };
};

export default App;
