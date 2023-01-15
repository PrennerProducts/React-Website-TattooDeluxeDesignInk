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
    
        <TypeAnimation className="type-animation"
      sequence={[
        'Hallo und herzlich  Willkommen bei PP INK Völkermarkt', // Types 'One'
        2000, // Waits 1s
        'Ich bin Phil und freue mich auf euren Besuch!', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Tätovierer', // Types 'Three' without deleting 'Two'
        1000, // Waits 2s
        'Künstler', // Types 'Three' without deleting 'Two'
        1000, // Waits 2s
        'Artist', // Types 'Three' without deleting 'Two'
        1000, // Waits 2s
        '', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={false}
      style={{ fontSize: '3em', paddingLeft: '5px', alignItems: 'top' }}
    />
       </div>
    
       <video src="/videos/tattoo2.mp4" autoPlay loop muted />
    </div>
  );
}

export default HeroSection;
