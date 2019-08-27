export default function (clickCounter, {updateEl, triggerEl}) {
    const updateElement = updateEl;
    if (!clickCounter) {
        throw Error('isNull');
    }
    if (!updateElement) {
        throw Error('update Element is Null');
    }
    const view = {
        updateView() {
            updateElement.innerHTML = clickCounter.getValue();
        },
        increaseAndUpdateView() {
            clickCounter.count();
            this.updateView();
        }
    };
    triggerEl.addEventListener('click', () => {
        view.increaseAndUpdateView();
    });
    return view;
}
