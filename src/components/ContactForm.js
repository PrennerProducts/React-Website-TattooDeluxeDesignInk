import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'


const ContactForm = () => {const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_woq2he8', 'service_woq2he8', form.current, 'etQGduZrbhhtzgCMx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="contactFormContainer">
      <h2>Kontaktformular</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Telefon Nr.</label>
          <input type="telefon" name="user_telefon" required />
      
          <label>Nachricht</label>
          <textarea name="message" required />
          <input type="submit" value="Senden" style={{width:'150px', height:'50px', marginTop: '20px'}} onClick={sendEmail}/>
        </div>
      </form>
    </div>
  )
}
export default ContactForm