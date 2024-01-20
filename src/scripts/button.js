// 💡 Explicacion:
// ❗ El Button tiene que tener el data-function="nombreDeLaFuncion".
// 1) La idea seria agregar todas las funciones onClick en BUTTON_FUNCTIONS.
// ⚠ El nombre que le demos debe coincidir con el data-function puesto en el Button. 

const BUTTON_FUNCTIONS = {
   redirect: () => console.log('redirect'),
   nothing: () => console.log('nothing'),
   call: () => console.log('call'),
}

const Allbuttons = document.querySelectorAll('.button')
Array.from(Allbuttons).map(btn => {
   btn.addEventListener('click', BUTTON_FUNCTIONS[btn.dataset.function])
   // console.log(btn.dataset.function)
})