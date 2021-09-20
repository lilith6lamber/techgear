'use strict';

import drawNotification from './notification';

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function validateContactForm() {
    const formElem = document.querySelector('.contacts_form-form'),
        requiredFields = document.querySelectorAll('.contacts_form-form .required'),
        optionalFields = document.querySelectorAll('.contacts_form-form .optional');
    
    const success = {
        title: "Thank you!",
        html: `
            <p class="main">Our customer service will reply you as soon as possible.</p>
            <span class="highlight">Have a nice day! :)<span>`,
        timer: 3000,
        customClass: {
            popup: 'contacts_popup',
            title: 'contacts_popup-title',
            htmlContainer: 'contacts_popup-content'
        }
    };

    formElem.addEventListener('submit', (e) => {
        e.preventDefault();
        for (let i = 0; i < requiredFields.length; i++) {
            let el = requiredFields[i];
            if (el.value === '') {
                el.classList.add('error');
            } else if (el.classList.contains('email') && !emailRegExp.test(el.value)) {
                el.classList.add('error');
            } else {
                el.classList.remove('error');
                el.value = '';
                for (let j = 0; j < optionalFields.length; j++) {
                    optionalFields[j].value = '';
                }
                drawNotification(success);
            }

            el.addEventListener('input', () => {
                el.classList.remove('error');
            })
        }
    });
}