import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { TypeAnimation } from 'react-type-animation'



function HeroSection() {
  return (
    <div className="hero-container">
        
       
    
      {/* <div className="gif-container">
          <img  className='gif-img' src='/images/gif.gif' alt='GIF' loop />
      </div> */}
       
       <div className="begruessungsDiv">
    
        <TypeAnimation 
      sequence={[
        3000, // Waits 1s
        'Herzlich  Willkommen bei PP INK', // Types 'One'
        5000, // Waits 1s
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
      deletionSpeed={45}
      style={{ fontSize: '5em', paddingLeft: '5px', alignItems: 'center', color: 'white',  fontFamily: 'Rowdies'  }}
      className="typeAnimation"
    
    />
       </div>
    
       <video style={{with:'250%'}} src="/videos/tattoo.mp4" autoPlay loop muted />
    </div>
  );
}

export default HeroSection;
