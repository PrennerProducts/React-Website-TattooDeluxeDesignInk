import React, {useRef, useEffect, useState} from 'react'
import { IconContext } from 'react-icons'
import { MdPlace } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import './ContactInfoItem.css'
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';
import {useInView} from 'react-intersection-observer'

export default function ContactInfoItem({
    
    icon= <BsFacebook className='iconstyle'/>,
    text='This is  HAALLLOOS',
    type= 'WhatsApp' 
    
}) {

  const {ref: myRef, inView: myElementIsVisble} = useInView({triggerOnce: true});

 


  // const clickHandler = () => {
  // if(type === 'WhatsApp'){
  //   <ReactWhatsapp number="00436644274644" message="Hallo, ich habe eine Frage zu ..." />
  // }
  // return alert('Hallo');
  // }


  return (
    <div className="itemstylecontainer">
      <div ref={myRef} className={` ${myElementIsVisble ? 'ItemStyles' : 'ItemStylesHidden' }`} >
      
          <IconContext.Provider value={{ size: "10rem" }}>
          <div className="icon" >{icon}</div>
          </IconContext.Provider>
          <div className="info">
              <p>{text}</p>
          </div>
      </div>
    </div>
    
  )
}
