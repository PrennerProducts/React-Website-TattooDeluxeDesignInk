import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import Alert from 'react-bootstrap/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useInView} from 'react-intersection-observer'


const ContactForm = () => {
  // Animation Form
  const {ref: formRef, inView: formVisabile} = useInView();
  
 //Alert Totast
  const notify = () =>{
    toast.success('🦄 Nachricht wurde gesendet!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const clearInput = () => {
    document.getElementById('user_name').value = '';
    document.getElementById('user_email').value = '';
    document.getElementById('user_telefon').value = '';
    document.getElementById('message').value = '';
  }
  
 
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_woq2he8', 
      'template_k6kc3xs', 
      form.current, 
      'etQGduZrbhhtzgCMx')
      .then((result) => {
        notify();
        clearInput();
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  }

  
  return (
    <div ref={formRef} className={`${formVisabile ? 'contactFormContainer' : 'contactFormContainerHidden' }`} >
      <h2>Kontaktformular</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" id="user_name"  required />
          <label>Email</label>
          <input type="email" name="user_email" id="user_email" required />
          <label>Telefon Nr.</label>
          <input type="telefon" name="user_telefon" id="user_telefon" required />
      
          <label>Nachricht</label>
          <textarea name="message"  id="message" required />
          <input type="submit" value="Senden" style={{width:'150px', height:'50px', marginTop: '20px'}} />
        </div>
      </form>
      {/* Allert Toast Container */}
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
    </div>
  )
}
export default ContactForm