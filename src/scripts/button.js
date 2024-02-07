// 💡 Explicacion:
// ❗ El Button tiene que tener el data-function="nombreDeLaFuncion".
// 1) La idea seria agregar todas las funciones onClick en BUTTON_FUNCTIONS.
// ⚠ El nombre que le demos debe coincidir con el data-function puesto en el Button. 

// import { validateLogin } from "./validate-form";

export function displayError(thisForm, error) {
   console.log('errorrrrrrrrrrrrrrrrrr')
   console.log(error)
   thisForm.querySelector('.loading').classList.remove('d-block');
   thisForm.querySelector('.error-message').innerHTML = error;
   thisForm.querySelector('.error-message').classList.add('d-block');
}

const BUTTON_FUNCTIONS = {
   toggle_navbar: () => {
      const navbar = document.querySelector('.menu')
      navbar.classList.toggle('navbar-active')
   },
   // goBack_reach: () => {
   //    window.history.back(-1)
   // },
   slide: () => {
      const slider01 = document.querySelector('.slider-01');
      const slider02 = document.querySelector('.slider-02');
      if (slider01.style.display !== 'none') {
         slider01.style.display = 'none';
         slider02.style.display = 'flex';
      } else {
         slider01.style.display = 'flex';
         slider02.style.display = 'none';
      }
   },
   sent_email: () => {
      "use strict";

      let forms = document.querySelectorAll('.php-email-form');
      console.log(forms)
      forms.forEach(function (e) {
         console.log(e)
         e.addEventListener('submit', function (event) {
            event.preventDefault();

            let thisForm = this;

            let action = thisForm.getAttribute('action');
            let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
            
            if (!action) {
               displayError(thisForm, 'The form action property is not set!')
               return;
            }


            document.querySelector('.loading').classList.add('d-block');
            document.querySelector('.error-message').classList.remove('d-block');
            document.querySelector('.sent-message').classList.remove('d-block');

            let formData = new FormData(thisForm);

            if (recaptcha) {
               if (typeof recaptcha !== "undefined") {
                  recaptcha.ready(function () {
                     try {
                        recaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
                           .then(token => {
                              formData.set('recaptcha-response', token);
                              php_email_form_submit(thisForm, action, formData);
                           })
                     } catch (error) {
                        displayError(thisForm, error)
                     }
                  });
               } else {
                  displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
               }
            } else {
               php_email_form_submit(thisForm, action, formData);
            }
         });
      });

      function php_email_form_submit(thisForm, action, formData) {
         fetch(action, {
            method: 'POST',
            body: formData,
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
         })
            .then(response => {
               if (response.ok) {
                  return response.text()
               } else {
                  throw new Error(`${response.status} ${response.statusText} ${response.url}`);
               }
            })
            .then(data => {
               thisForm.querySelector('.loading').classList.remove('d-block');
               if (data) {
                  thisForm.querySelector('.sent-message').classList.add('d-block');
                  thisForm.reset();
               } else {
                  throw new Error('Error');
               }
            })
            .catch((error) => {
               displayError(thisForm, error);
            });
      }
   },
}

const Allbuttons = document.querySelectorAll('.button');
Allbuttons.forEach(btn => {
   btn.addEventListener('click', () => {
      const functionName = btn.dataset.function;
      if (BUTTON_FUNCTIONS[functionName]) {
         BUTTON_FUNCTIONS[functionName]();
      } else {
         console.error(`Function ${functionName} is not defined in BUTTON_FUNCTIONS`);
      }
   });
});