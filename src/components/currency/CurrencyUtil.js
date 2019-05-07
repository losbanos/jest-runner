export const onErrorImageLoad = function (event, type) {
    console.log(event.target);
    event.target.removeEventListener(event.type, onErrorImageLoad);
    event.target.src = '';
}
export const onErrorHandler = function (event, type) {
    return false;
}