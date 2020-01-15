import ClickCounter from './ClickCountModel';
import ClickCountView from './view/ClickCountView';
import App from './common/App';

App.ClickCounter = ClickCounter;
App.ClickCountView = ClickCountView;

const counterDesc = App.ClickCounter({value: 0}).setCountFn(v => v - 1);
const counterInc = App.ClickCounter({value: 0});

const btnInc = document.querySelector('#btn_increase');
const btnDesc = document.querySelector('#btn_descrease');
const updateEl = document.querySelector('#counter_display');

const viewInc = App.ClickCountView(counterInc, {updateEl, triggerEl: btnInc});
const viewDesc = App.ClickCountView(counterDesc, {updateEl, triggerEl: btnDesc});
viewInc.updateView();
// viewDesc.updateView();
