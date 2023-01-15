import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'


function HeroSection() {
  return (
    <div className="hero-container">
        <video src="/videos/tattoo2.mp4" autoPlay loop muted />
       
    
      <div className="gif-container">
          <img  className='gif-img' src='/images/gif.gif' alt='GIF' loop />
      </div>
       
    
     

  
    </div>
  );
}

export default HeroSection;
