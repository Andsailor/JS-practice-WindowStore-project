import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};

    changeModalState(modalState);
    modal();
    tabs();
    forms(modalState);
    timer(2022, 9, 31);
    images();
});