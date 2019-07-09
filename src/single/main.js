import ClickCountModel from './ClickCountModel';
import ClickCountView from './view/ClickCountView';

const counter = ClickCountModel.ClickCounter();
const triggerEl = document.querySelector('#btn_increase');
const updateEl = document.querySelector('#counter_display');
const view = ClickCountView.initView(counter, { updateEl, triggerEl });
view.updateView();
