

import { Resend } from 'resend';


export const sendEmail = async (event) => {

   const name = document.querySelector('#form--name').value
   const email = document.querySelector('#form--email').value
   const subject = document.querySelector('#form--subject').value
   const message = document.querySelector('#form--message').value

   // se puede hace run formData
   const formData = new FormData()
   formData.append('name', name)
   formData.append('email', email)
   formData.append('subject', subject)
   formData.append('message', message)

  

}


