import ClickCountModel from './ClickCountModel';
import ClickCountView from './view/ClickCountView';

const counterDesc = ClickCountModel.ClickCounter({ value: 0 }).setCountFn(v => v - 1);
const counterInc = ClickCountModel.ClickCounter({ value: 0 });

const btnInc = document.querySelector('#btn_increase');
const btnDesc = document.querySelector('#btn_descrease');
const updateEl = document.querySelector('#counter_display');

const viewInc = ClickCountView.initView(counterInc, { updateEl, triggerEl: btnInc });
const viewDesc = ClickCountView.initView(counterDesc, { updateEl, triggerEl: btnDesc });
viewInc.updateView();
// viewDesc.updateView();
