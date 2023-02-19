import React from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import ContactInfoItem from './ContactInfoItem'
import './ContactSection.css'
import ContactForm from './ContactForm'
import { BsFacebook, BsInstagram, BsWhatsapp, BsGoogle } from 'react-icons/bs';
import {FcGoogle} from 'react-icons/fc';
import Zeiten from './Zeiten'

// import SectionTitle from '../SectionTitle'



export default function ContactSection() {

  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
     setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  //Open Links for ContactInfoItem
  const openLink = (link) => {
    let theForm = document.getElementById('ContactItemForm');
    theForm.submit();
  }

  return (
        <div className="section-container">
            <h1>Kontakt</h1>
            <h2>So erreichst du uns...</h2>
              <div className="zeiten">
                <Zeiten />
              </div>
              <div className="contactSection__wrapper_left">
                   <a href='https://www.facebook.com/PPINKTATTOOSTUDIO/' target='_blank' rel='noreferer'>
                      <ContactInfoItem onClick={openLink} icon={<BsFacebook color='blue'/> } text='Besuche uns auf Facebook' type='WhatsApp' />
                    </a>
                    <a href='https://www.instagram.com/phil_pp_ink/' target='_blank' rel='noreferer'>
                      <ContactInfoItem icon={<BsInstagram color='white'/> } text='Besuche uns auf Instagram'/>
                    </a>
                    <a href='https://wa.me/436644274644' target='_blank' rel='noreferer'>
                      <ContactInfoItem icon={<BsWhatsapp color='green'/> } text='Kontaktier uns auf WhatsApp'/>
                    </a>
                    <a href='https://g.page/r/CRfZT-_Sz7KAEB0/review' target='_blank' rel='noreferer'>
                      <ContactInfoItem onClick={console.log('Click Click!')} icon={<FcGoogle color='white'/> } text='Bewerte uns auf Google'/>
                    </a>
              </div>
              <div className="contactSection__wrapper_right">
 
                    <ContactForm />
              </div>
            
          
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.62142936710194!2d14.637123857067383!3d46.66189664924629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477004d368c32a1f%3A0x80b2cfd2ef4fd917!2sPP%20INK%20TATTOOSTUDIO!5e0!3m2!1sde!2sat!4v1674516842834!5m2!1sde!2sat" 
            width="100%"
            display="left"
             height="450" 
             style={{border:'0'}}
             allowfullscreen="true" 
             loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">

              </iframe>
            </div>
            
         </div>
  )
}
