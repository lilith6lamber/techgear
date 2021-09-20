'use strict';

export function setPadding(target, el) {
    const targetEl = document.querySelector(target);
    const paddingTop = window.getComputedStyle(el).height;
    targetEl.style.paddingTop += parseInt(paddingTop);
}