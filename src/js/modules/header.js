'use strict';

import Headroom from "headroom.js";
import VanillaScrollspy from 'vanillajs-scrollspy';
import { setPadding } from "./setters";

function initHeader(settings, trigger, menu, menuLinks) {
    const headerEl = document.querySelector(".header");
    const headerDefaults = {
        "offset": 500,
        "tolerance": 10
    };
    const headroom = new Headroom(headerEl, settings ? settings : headerDefaults);
    headroom.init();
    drawNav(trigger, menu, menuLinks);

    window.addEventListener('load', () => {
        setPadding('.hero', headerEl);
    });

    window.addEventListener('resize', () => {
        setPadding('.hero', headerEl);
    });
}

function drawNav(trigger, menu, menuLinks) {

    const menuTrigger = document.querySelector(trigger),
        menuList = document.querySelector(menu),
        menuItems = document.querySelectorAll(menuLinks),
        linkElems = document.querySelectorAll(`${menuLinks} a`);
    
    const scrollspy = VanillaScrollspy(menuList, 400, 'easeInOutQuint');
    scrollspy.init();

    window.addEventListener('load', () => {
        if (window.scrollY === 0) {
            linkElems[0].classList.add('active');
        } 
    });

    
    function openMenu() {
        menuTrigger.classList.toggle('active');
        menuList.classList.toggle('active');
    }

    function closeMenu() {
        menuList.classList.remove('active');
        menuTrigger.classList.remove('active');
    }

    menuTrigger.addEventListener('click', openMenu);

    menuItems.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (!window.getComputedStyle(menuTrigger).display === 'none') {
            menuList.style.display = 'block';
        } else if (menuList.classList.contains('active')) {
            closeMenu();
        }
    });

}


export default initHeader;
