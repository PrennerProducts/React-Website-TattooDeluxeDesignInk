import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { TypeAnimation } from 'react-type-animation'
import Footer from './pages/Footer'
import UeberMich from './pages/UeberMich'
import Contact from './pages/Contact'
import Gallerie from './pages/Gallerie'
import ContactForm from './ContactForm'
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function HeroSection() {



  return (
  
    <div className="hero-container">
       
    
      {/* <div className="gif-container">
          <img  className='gif-img' src='/images/gif.gif' alt='GIF' loop />
      </div> */}
       
       <div className="begruessungsDiv">
    
        <TypeAnimation 
      sequence={[
        1000, // Waits 1s
        'Herzlich  Willkommen bei PP INK', // Types 'One'
        3000, // Waits 1s
        'Ihrem Zuhause für Tattoos', // Types 'One'
        3000, // Waits 1s
        
          // Waits 2s
        '',// Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      
      wrapper="div"
      cursor={false}
      repeat={false}
      speed={45}
      deletionSpeed={70}
      style={{top: '250px', fontSize: '5em', paddingLeft: '0px', marginTop: '200px', alignItems: 'center', color: 'white',  fontFamily: 'Rowdies' }} //, backgroundColor:'rgba(0, 0, 0, 0.2)' 
      className="typeAnimation"
    
    />
       </div>
       <img className='herologo' src="/images/white_logo_transparent_background.png" alt="logocube"  />    
       <video style={{with:'250%'}} src="/videos/Tattoo_zoom.mp4" autoPlay loop muted  />
      
      
      
    </div>
     
   
   
  );
}

export default HeroSection;
