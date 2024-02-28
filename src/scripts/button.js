// 💡 Explicacion:
// ❗ El Button tiene que tener el data-function="nombreDeLaFuncion".
// 1) La idea seria agregar todas las funciones onClick en BUTTON_FUNCTIONS.
// ⚠ El nombre que le demos debe coincidir con el data-function puesto en el Button. 

// import { validateLogin } from "./validate-form";

export function displayError(thisForm, error) {
	thisForm.querySelector('.loading').style.display = 'none';
	thisForm.querySelector('.error-message').style.display = 'block';
	thisForm.querySelector('.error-message').innerHTML = error;
}

const BUTTON_FUNCTIONS = {
   toggle_navbar: () => {
      const navbar = document.querySelector('.menu')
			const liElements = document.querySelectorAll('.navBar-anchor')
			navbar.classList.toggle('navbar-active')
      liElements.forEach((li) => {
				li.classList.toggle('navbar-active')
			})
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
		forms.forEach(function (e) {
			 e.addEventListener('submit', function (event) {
					event.preventDefault();
 
					let thisForm = this;
					let action = thisForm.getAttribute('action');
					let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
					
					if (!action) {
						 displayError(thisForm, 'The form action property is not set!')
						 return;
					}
 
					document.querySelector('.loading').style.display = 'block';
					document.querySelector('.error-message').style.display = 'none';
					document.querySelector('.sent-message').style.display = 'none';
 
					let formData = new FormData(thisForm);
 
					if (recaptcha) {
						 if (typeof recaptcha !== "undefined") {
								recaptcha.ready(function () {
									 try {
											recaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
												 .then(token => {
														formData.set('recaptcha-response', token);
														// Llamamos a php_email_form_submit usando una función anónima para preservar el contexto
														(function () {
															 php_email_form_submit(thisForm, action, formData);
														})();
												 })
									 } catch (error) {
											displayError(thisForm, error)
									 }
								});
						 } else {
								displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
						 }
					} else {
						 // Llamamos a php_email_form_submit usando una función anónima para preservar el contexto
						 (function () {
								php_email_form_submit(thisForm, action, formData);
						 })();
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
						 thisForm.querySelector('.loading').style.display = 'none';

						 if (data) {
								thisForm.querySelector('.sent-message').style.display = 'block';
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

const LI_FUNCTIONS = {
  toggle_navbar: () => {
    const navbar = document.querySelector('.menu');
    const liElements = document.querySelectorAll('.navBar-anchor');

    // Toggle 'navbar-active' en el menú
    navbar.classList.toggle('navbar-active');

    // Toggle 'navbar-active' en cada elemento li
    liElements.forEach((li) => {
      li.classList.toggle('navbar-active');
    });
  },
};

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

const AllLiElements = document.querySelectorAll('.navBar-anchor');

AllLiElements.forEach(li => {
  li.addEventListener('click', () => {
    const functionName = li.dataset.function;
		//console.log({li})
    if (LI_FUNCTIONS[functionName]) {
      LI_FUNCTIONS[functionName]();
    } else {
      console.error(`Function ${functionName} is not defined in LI_FUNCTIONS`);
    }
  });
});