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
}

//const Allbuttons = document.querySelectorAll('.button')
//Array.from(Allbuttons).map(btn => {
//   btn.addEventListener('click', BUTTON_FUNCTIONS[btn.dataset.function])
//   // console.log(btn.dataset.function)
//})

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