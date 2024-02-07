// 💡 Explicacion:
// ❗ El Button tiene que tener el data-function="nombreDeLaFuncion".
// 1) La idea seria agregar todas las funciones onClick en BUTTON_FUNCTIONS.
// ⚠ El nombre que le demos debe coincidir con el data-function puesto en el Button. 

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
		//sentEmail: (thisForm, action, formData) => {
		//		fetch(action, {
		//			method: 'POST',
		//			body: formData,
		//			headers: {'X-Requested-With': 'XMLHttpRequest'}
		//		})
		//		.then(response => {
		//			if( response.ok ) {
		//				return response.text()
		//			} else {
		//				throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
		//			}
		//		})
		//		.then(data => {
		//			thisForm.querySelector('.loading').classList.remove('d-block');
		//			if (data) {
		//				thisForm.querySelector('.sent-message').classList.add('d-block');
		//				thisForm.reset(); 
		//			} else {
		//				throw new Error('Error'); 
		//			}
		//		})
		//		.catch((error) => {
		//			displayError(thisForm, error);
		//		});
		//	}
		php_email_form_submit: (thisForm) => {
			const action = thisForm.getAttribute('action');
			const formData = new FormData(thisForm);
	
			fetch(action, {
				method: 'POST',
				body: formData,
				headers: { 'X-Requested-With': 'XMLHttpRequest' },
			})
				.then(response => {
					if (response.ok) {
						return response.text();
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