export default function (clickCounter, { updateEl, triggerEl }) {
    if (!clickCounter) {
        throw Error('isNull');
    }
    if (!updateEl) {
        throw Error('update Element is Null');
    }
    const view = {
        updateView() {
            updateEl.innerHTML = clickCounter.getValue();
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
