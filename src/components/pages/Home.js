import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Gallerie from './Gallerie';
import UeberMich from './UeberMich';




function Home() {
    const componentDidMount = () =>  {
        window.scrollTo(0, 0);
    };
    return (
        componentDidMount(),
        <>
<<<<<<< HEAD
       
            <div className='hero-container'><HeroSection  /> </div>
           
      
=======
        <HeroSection />
        
>>>>>>> parent of e4783bd (before gpt)

        </>
    );
    }

    export default Home;