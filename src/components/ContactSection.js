import React from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import ContactInfoItem from './ContactInfoItem'
import './ContactSection.css'
import ContactForm from './ContactForm'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

// import SectionTitle from '../SectionTitle'



export default function ContactSection() {

  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
     setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
        <div className="container">
            <h1>Kontakt</h1>
            <h2>So erreichst du uns...</h2>
            <div className="contactSection__wrapper">

                  <ContactInfoItem icon={<BsFacebook color='blue'/> } text='Besuche uns auf Facebook' type='WhatsApp' />
                  <ContactInfoItem icon={<BsInstagram color='white'/> } text='Besuche uns auf Instagram'/>
                  <ContactInfoItem icon={<BsWhatsapp color='green'/> } text='Kontaktier uns auf WhatsApp'/>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.62142936710194!2d14.637123857067383!3d46.66189664924629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477004d368c32a1f%3A0x80b2cfd2ef4fd917!2sPP%20INK%20TATTOOSTUDIO!5e0!3m2!1sde!2sat!4v1674516842834!5m2!1sde!2sat" 
            width="100%"
            display="left"
             height="450" 
             style={{border:'0'}}
             allowfullscreen="" 
             loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">

              </iframe>
            </div>
            </div>
         </div>
  )
}