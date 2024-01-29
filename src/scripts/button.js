// 💡 Explicacion:
// ❗ El Button tiene que tener el data-function="nombreDeLaFuncion".
// 1) La idea seria agregar todas las funciones onClick en BUTTON_FUNCTIONS.
// ⚠ El nombre que le demos debe coincidir con el data-function puesto en el Button. 

import {sendEmail} from '../utils/sendEmail.js'

const BUTTON_FUNCTIONS = {
   send_email: (event) => {
      event.preventDefault()
      sendEmail(event)
      
   }
}

const Allbuttons = document.querySelectorAll('.button')
Array.from(Allbuttons).map(btn => {
   btn.addEventListener('click', BUTTON_FUNCTIONS[btn.dataset.function])
   // console.log(btn.dataset.function)
})