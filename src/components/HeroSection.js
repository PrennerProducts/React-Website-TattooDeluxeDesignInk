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
      style={{top: '250px', fontSize: '5em', paddingLeft: '0px', marginTop: '200px', alignItems: 'center', color: 'white',  fontFamily: 'Rowdies' }} //, backgroundColor:'rgba(0, 0, 0, 0.2)' 
      className="typeAnimation"
    
    />
       </div>
       <img className='herologo' src="/images/white_logo_transparent_background.png" alt="bug"  />    
       <video style={{with:'250%'}} src="/videos/Tattoo_zoom.mp4" autoPlay loop muted />
    </div>
  );
}

export default HeroSection;
