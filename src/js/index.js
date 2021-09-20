'use strict';

import initLoader from './modules/loader';
import initHeader from './modules/header';
import LazyLoad from "vanilla-lazyload";
import AOS from 'aos';
import initSlider from './modules/slider';
import {validateContactForm} from './modules/forms';

initLoader();

document.addEventListener("DOMContentLoaded", () => {
    initHeader(null, '.hamburger', '.header_nav', '.list-item');

    const lazyload = new LazyLoad();
    
    AOS.init();

    initSlider({
        container: '.members_slider',
        controlsContainer: '.members_slider-controls',
        responsive: {
            576: {
                gutter: 20,
                items: 2,
                adaptiveHeight: true
            },
            768: {
                gutter: 30,
                items: 3,
            },
            992: {
                items: 4,
                edgePadding: 22
            }
        }
    });

    validateContactForm();
});