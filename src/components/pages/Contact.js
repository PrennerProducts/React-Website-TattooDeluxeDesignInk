import React from 'react'
import ContactSection from '../../components/ContactSection.js'
import ContactForm from '../ContactForm.js'
import Zeiten from '../Zeiten.js'
import './Contact.css'


export default function Contact() {
     //Scroll to top
     const componentDidMount = () =>  {
      window.scrollTo(0, 0);
  };

  return (
    componentDidMount(),
    <div className="ccontainer">
      <ContactSection />
    </div>
  )
}
